<?php
include('storage/userstorage.php');
include('storage/appointmentstorage.php');
include('lib/auth.php');
include('lib/helper.php');



// beolvasás
session_start();
$auth = new Auth(new UserStorage());
if (!$auth->is_authenticated()) {
  redirect('login.php');
}
$id = $_GET['id'];
$AppStorage = new AppStorage();
$app = $AppStorage->findById($id);
$auth_user = $auth->authenticated_user();
$bele=false;
if(isset($_POST['bele']) && $_POST['bele'] != '')
{
    $bele = $_POST['bele'];
}
if($bele)
{
    redirect('add.php?id='.$id.'&userid='.$auth_user['id']);
}


   



?> 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Részletek</title>
</head>
<body>
  <h1>Részletek</h1>
  Dátum : <?=$app['date'] ?> <br >
  Férőhelyek: <?=$app['ferohelyek'] ?>
  Szabad helyek: <?= 1 + $app['ferohelyek'] - count($app['jelentkezettek'] === null ? [] : $app['jelentkezettek']); ?>
  <?php if( 1 + $app['ferohelyek'] - count($app['jelentkezettek']) > 0 && !in_array($auth_user['id'],$app['jelentkezettek'])):?>
    <form action="" method="post" novalidate>
    <br> <br>
    időpontra jelentkezéssel elfogadom a jelentkezés feltételeit <br>
    (pl. hogy kötelező megjelenni, vagy lehetnek az oltásnak mellékhatásai)<input type="checkbox" name="bele" id="bele" required> 
     <br ><button type="submit">Jelentkezés megerősítése</button> 
    </form>
    <?php else:?>
    <br> Nincs szabad hely, vagy Ön már jelentkezett erre az időpontra!
    <?php endif;?>
    <br> <a href="index.php"> Vissza a kezdőlapra </a>
</body>
</html>