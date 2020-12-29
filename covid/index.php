<?php
include_once('storage/appointmentstorage.php');
include_once('storage/userstorage.php');
include_once('lib/auth.php');
include_once('lib/helper.php');


session_start();
$auth = new Auth(new UserStorage());


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NemKoVid - Mondj nemet a koronavírusra!</title>
</head>
<body>
    <?php if(!$auth->is_authenticated()) : ?>
   <h3> Kedves fertőzött! <br> 
    Ezen a weboldalon lehetősége van a kifejlesztett vakcinával történő beoltásra való időpontfoglalásra. <br> 

    Az alábbi gombokkal hozzáférhet a további funckiókhoz: <br> </h3>

    <button onclick="window.location.href='login.php' ">Bejelentkezés </button><button onclick="window.location.href='registration.php' ">Regisztráció</button>


    <?php elseif($auth->is_admin()): ?>
        <?php $AppStorage = new AppStorage();
        $authenticated_user = $auth->authenticated_user();
        $Apps = $AppStorage->findAll();
        ?>
    <h3> Az ön időpontjai: admin </h3>
    <table>
    <tr>
    <td> Időpont </td>
    <td> Férőhelyek </td>
    <?php foreach($Apps as $app) : ?>
        <tr>
          <td>
            <a href="reszletek.php?id=<?= $app['id'] ?>">
              <?= $app['date'] ?>
            </a>
          </td>
          <td><?= $app['ferohelyek'] ?></td>
        </tr>
      <?php endforeach ?>
      </table>


      <a href="logout.php">Logout</a>
    <a href="new.php"> Új időpont hozzáadása </a>

    <?php else:?>
        <?php $AppStorage = new AppStorage();
        $authenticated_user = $auth->authenticated_user();
        $Apps = $AppStorage->findAll();
        ?>
    <h3> Az ön időpontjai: user </h3>
    <table>
    <tr>
    <td> Időpont </td>
    <td> Férőhelyek </td>
    <?php foreach($Apps as $app) : ?>
        <tr style="background-color:<?= 1 + $app['ferohelyek'] - count($app['jelentkezettek']) > 0 ? 'green' : 'red'?>">
          <td>
              <?= $app['date'] ?>
            </a>
          </td>
          <td><?= 1 + $app['ferohelyek'] - count($app['jelentkezettek']) ?>/<?=$app['ferohelyek']?></td>

          <td><a href="reszletek.php?id=<?= $app['id'] ?>">Jelentkezés </a></td>
        </tr>
      <?php endforeach ?>
      </table>
    <a href="logout.php">Logout</a>

    <?php endif; ?>
    
</body>
</html>