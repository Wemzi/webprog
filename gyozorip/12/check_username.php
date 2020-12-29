<?php
include('userstorage.php');
include('auth.php');
include('helper.php');

// main
$auth = new Auth(new UserStorage());
$username = $_GET['username'] ?? NULL;
$exists = $username === NULL ? false : $auth->user_exists($username);
// var_dump($exists);
?>
{
  "exists": <?= $exists ? 'true' : 'false' ?>
}
