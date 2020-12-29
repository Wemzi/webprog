<?php
// print_r($_POST);
include('storage/userstorage.php');
include('storage/appointmentstorage.php');
include('lib/auth.php');
include('lib/helper.php');

// Függvenyek
function validate($post, &$data, &$errors) {
  if (!isset($post['date']) || $post['date'] === '') {
    $errors['date'] = 'A dátum megadása kötelező!';
  }
  else {
    $data['date'] = $post['date'];
  }


  if (!isset($post['ferohelyek']) || trim($post['ferohelyek']) === '') {
    $errors['ferohelyek'] = "A férőhelyek megadása kötelező!";
  } else {
    $data['ferohelyek'] = $post['ferohelyek'];
  }

  return count($errors) === 0;
}
// Főprogram
session_start();
$auth = new Auth(new UserStorage());
if (!$auth->is_authenticated() || !$auth->is_admin()) {
  redirect('login.php');
}



$data = [];
$errors = [];
if (count($_POST) > 0) {
  if (validate($_POST, $data, $errors)) {
    $auth_user = $auth->authenticated_user();
    $data['jelentkezettek']=[$auth_user['id']];
    $AppStorage = new AppStorage();
    $AppStorage->add($data);
    redirect('index.php');
  }
}
?>
<html>
  <head>
    <title>PHP Test</title>
    <style>
    input + span {
      color: red;
    }
    </style>
  </head>
  <body>
    <h1>Új időpont hozzáadása</h1>
    <?php if (count($errors) > 0) : ?>
      <ul>
        <?php foreach($errors as $error) : ?>
          <li><?= $error ?></li>
        <?php endforeach ?>
      </ul>
    <?php endif ?>
    <form action="" method="post" novalidate>
      Dátum: <input type="datetime-local" name="date" required value="<?= $_POST['date'] ?? "" ?>"> 
      <?php if (isset($errors['date'])) : ?>
        <span><?= $errors['date'] ?></span>
      <?php endif ?>
      <br>
        Férőhelyek száma: <input type="number" name="ferohelyek" required  value="<?= $_POST['ferohelyek'] ?? "" ?>">
        <?php if (isset($errors['ferohelyek'])) : ?>
        <span><?= $errors['ferohelyek'] ?></span>
      <?php endif ?>
      <br>
      <button type="submit">Időpont hozzáadása</button>
      
    </form>
  </body>
</html>