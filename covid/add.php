<?php 

include_once('storage/userstorage.php');
include_once('storage/appointmentstorage.php');
include_once('lib/auth.php');
include_once('lib/helper.php');
$id = $_GET['id'];
$userid = $_GET['userid'];
$AppStorage = new AppStorage();
$app = $AppStorage->findById($id);
$AppStorage->delete($id);
array_push($app['jelentkezettek'],$userid);
$AppStorage->add($app);
redirect("index.php");
?>