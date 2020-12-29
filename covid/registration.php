<?php
include_once('storage/userstorage.php');
include_once('lib/auth.php');
include_once('lib/helper.php');

$errors = '';
$data=[];
$teljesnev='';
$tajszam=0;
$ertesitesicim='';
$email ='';
$jelszo='';


if($_POST)
{
    if(isset($_POST['teljesnev']) && $_POST['teljesnev'] != '')
    {
    $teljesnev= $_POST['teljesnev'];
    $data['teljesnev']=$teljesnev;
    }
    else
    {
    $errors.= 'Nincs név megadva! <br > ';
    }

    if(isset($_POST['tajszam']) && $_POST['tajszam'] != '' &&  is_numeric($_POST['tajszam']) &&  strlen($_POST['tajszam']) === 9 )
    {
    $tajszam = $_POST['tajszam'];
    $data['tajszam']=$tajszam;
    }
    else
    {
    $errors .= 'Helytelen formátumú, vagy hiányzó TAJ-szám! <br >';
    }

    if(isset($_POST['ertesitesicim']) && $_POST['ertesitesicim'] != '')
    {
    $ertesitesicim = $_POST['ertesitesicim'];
    $data['ertesitesicim']=$ertesitesicim;
    }
    else
    {
    $errors .= 'Nincs megadva értesítési cím! <br > ';
    }


    if ( isset($_POST['email']) && $_POST['email'] != ''  && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) 
    {
    $email = $_POST["email"];
    $data['email']=$email;
    }
    else
    {
    $errors .= ' Helytelen e-mail formátum! <br> ' ;
    }

    if( isset($_POST['jelszo']) && isset($_POST['jelszomeg']) &&  $_POST['jelszo'] === $_POST['jelszomeg'] && $_POST['jelszo'] != '')
    {
    $jelszo = $_POST['jelszo'];
    $data['jelszo']=$jelszo;
    }
    else
    {
    $errors .= 'Üres, vagy nem megegyező jelszó mező(k)!';
    }
    $user_storage = new UserStorage();
    $auth = new Auth($user_storage);


    if($errors === '' && count($_POST) > 0 )
    {
    if($auth->user_exists($email))
    {
    $errors.= 'Ezen az e-mail címen már van regisztrált felhasználónk! <br> ';
    } else {
    $auth->register($data);
    redirect("login.php");
    }

    }
}

?>

Regisztráció

<form action="" method="post">
<input type="text" name="teljesnev" id="teljesnev" required value="<?= $_POST['teljesnev'] ?? "" ?>"> Teljes név <br>
<input type="text" name="tajszam" id="tajszam" required value="<?= $_POST['tajszam'] ?? "" ?>"> Taj-szám (9 számjegy, egybe) <br>
<input type="text" name="ertesitesicim" required id="ertesitesicim" value="<?= $_POST['ertesitesicim'] ?? "" ?>"> Értesítési cím <br>
<input type="email" name="email" id="email" value="<?= $_POST['email'] ?? "" ?>"> E-mail cím (példa: joskapista@elte.hu) <br>
<input type="password" name="jelszo" id="jelszo"> Jelszó <br>
<input type="password" name="jelszomeg" id="jelszomeg"> Jelszó megerősítése <br>
<button type="submit">Regisztrálás</button>
</form>
<?= $errors ?>
<a href="index.php"> Kezdőlap </a>
<?php  ?>