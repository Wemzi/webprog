<?php

interface IFileIO {
  function save();
  function load();
}

interface IStorage {
  function add($record);
  function findById($id);
  function findAll($params = []);
  function findOne($params = []);
  function query($condition);
  function update($id, $record);
  function delete($id);
}

abstract class Storage implements IStorage, IFileIO {
  protected $contents;
  protected $filepath;

  abstract function load();
  abstract function save();

  public function __construct($filename) {
    if (!is_readable($filename) || !is_writable($filename)) {
      throw new Exception("Data source ${filename} is invalid.");
    }

    $this->filepath = realpath($filename);
    $this->load();
  }

  public function __destruct() {
    $this->save();
  }

  public function add($record) {
    $id = uniqid();
    $this->contents[$id] = $record;
    return $id;
  }

  public function findById($id) {
    return $this->contents[$id];
  }

  public function findAll($params = []) {
    return array_filter($this->contents, function ($item) use ($params) {
      foreach ($params as $key => $value) {
        if ($item[$key] !== $value) {
          return FALSE;
        }
      }

      return TRUE;
    });
  }

  public function findOne($params = []) {
    $found_items = $this->findAll($params);
    $first_index = array_keys($found_items)[0];
    return $found_items[$first_index];
  }

  public function query($condition) {
    return array_filter($this->contents, $condition);
  }

  public function update($id, $record) {
    $this->contents[$id] = $record;
  }

  public function delete($id) {
    unset($this->contents[$id]);
  }
}

abstract class ObjectStorage extends Storage {
  public function findAll($params = []) {
    return array_filter($this->contents, function ($item) use ($params) {
      foreach ($params as $key => $value) {
        if ($item->$key !== $value) {
          return FALSE;
        }
      }

      return TRUE;
    });
  }
}

class JsonStorage extends Storage {
  public function load() {
    $file_contents = file_get_contents($this->filepath);
    $this->contents = json_decode($file_contents, TRUE) ?: [];
  }

  public function save() {
    $json_content = json_encode($this->contents, JSON_PRETTY_PRINT);
    file_put_contents($this->filepath, $json_content);
  }
}

class SerializeStorage extends Storage {
  public function load() {
    $file_contents = file_get_contents($this->filepath);
    $this->contents = unserialize($file_contents) ?: [];
  }

  public function save() {
    $file_content = serialize($this->contents);
    file_put_contents($this->filepath, $file_content);
  }
}

class SerializeObjectStorage extends ObjectStorage {
  public function load() {
    $file_contents = file_get_contents($this->filepath);
    $this->contents = unserialize($file_contents) ?: [];
  }

  public function save() {
    $file_content = serialize($this->contents);
    file_put_contents($this->filepath, $file_content);
  }
}

$item_storage = new JsonStorage("items.json");

if (isset($_GET['item']) && isset($_GET['del'])) {
  $itemid = $_GET['item'];
  $del = $_GET['del'];

  $item = $item_storage->findById($itemid);
  unset($item['tags'][$del]);
  $item_storage->update($itemid, $item);
}

if (isset($_POST["update-id"]) && isset($_POST["update-text"])) {
  $iid = $_POST["update-id"];
  $text = $_POST["update-text"];

  $item = $item_storage->findById($iid);
  $item["name"] = $text;
  $item_storage->update($iid, $item);
}

$items = $item_storage->findAll();

?>

<ul>
  <?php foreach ($items as $iid => $item) : ?>
    <li>
      <form method="post">
        <input type="hidden" name="update-id" value="<?= $iid ?>">
        <input type="text" value="<?= $item["name"] ?>" name="update-text">
        <button>Update</button>
      </form>
      <?php foreach ($item["tags"] as $tid =>$tag) : ?>
        <a href="3.php?item=<?= $iid ?>&del=<?= $tid ?>">
          <?= $tag ?>
        </a>
      <?php endforeach; ?>
    </li>
  <?php endforeach; ?>
</ul>