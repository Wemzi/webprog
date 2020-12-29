<?php

const YEAR = (365 * 24 * 60 * 60);

$errors = [];

if (isset($_POST["birth"]) && isset($_POST["license"])) {
  $birth = $_POST["birth"];
  $license = $_POST["license"];

  $birth_time = strtotime($birth);
  $license_time = strtotime($license);

  if (!$birth_time) {
    $errors[] = "Bad date of birth";
  }

  if (!$license_time) {
    $errors[] = "Bad date of issue";
  }

  $age_license = ($license_time - $birth_time) / YEAR;

  if (empty($errors)) {
    if ($age_license < 60) {
      $expirity = strtotime("+10 years", $license_time);
    } else {
      $expirity = strtotime("+5 years", $license_time);
    }

    if ($expirity < time()) {
      $result = "License expired";
    } else {
      $result = "License expires at: " . date("Y-m-d", $expirity);
    }
  }
}

?>
<form method="post">
  Date of birth:
  <input type="date" name="birth">
  <br>
  License issued:
  <input type="date" name="license">
  <button type="submit">Send</button>
</form>

<?php if (isset($result)) : ?>
<?= $result ?>
<?php endif; ?>

<?php foreach ($errors as $error) : ?>
  <div class="error"><?= $error ?></div>
<?php endforeach ?>