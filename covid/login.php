<?php
include_once('storage/userstorage.php');
include_once('lib/auth.php');
include_once('lib/helper.php');


session_start();
$user_storage = new UserStorage();
$auth = new Auth($user_storage);
$data = [];
$errors = [];
    if ( isset($_POST['email']) && $_POST['email'] != ''  && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
    {
        $data['email']=$_POST["email"];
    }
    else
    {
      $errors['email']= ' Helytelen e-mail formátum! <br> ' ;
    }

    if( isset($_POST['jelszo']) && $_POST['jelszo'] != '')
    {
      $data['jelszo']=$_POST['jelszo'];
    }
    else
    {
      $errors['jelszo']= 'Üres, vagy helytelen jelszó!';
    }


if ($_POST) {
  if ($errors===[]) {
    $auth_user = $auth->authenticate($data['email'], $data['jelszo']);
    if (!$auth_user) {
      $errors['global'] = "Login error <br>";
      print_r($data);
    } else {
      $auth->login($auth_user);
      redirect('index.php');
    }
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bejelentkezés</title>
</head>
<body>
  <h1>Bejelentkezés a vakcina jelentkezési felületre</h1>
  <?php if (isset($errors['global'])) : ?>
    <p><span class="error"><?= $errors['global'] ?></span></p>
  <?php endif; ?>
  <form action="" method="post">
    <div>
      <label for="email">E-mail cím: </label><br>
      <input type="email" name="email" id="email" value="<?= $_POST['email'] ?? "" ?>">
      <?php if (isset($errors['email'])) : ?>
        <span class="error"><?= $errors['email'] ?></span>
      <?php endif; ?>
    </div>
    <div>
      <label for="jelszo">Jelszó: </label><br>
      <input type="password" name="jelszo" id="jelszo">
      <?php if (isset($errors['jelszo'])) : ?>
        <span class="error"><?= $errors['jelszo'] ?></span>
      <?php endif; ?>
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
  <a href="registration.php">Szeretnék felhasználót regisztrálni</a>
</body>
</html>