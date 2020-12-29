<?php 

session_start();

if (isset($_GET["reset"])) {
  $_SESSION["number"] = "";
}

if (isset($_GET["number"])) {
  $_SESSION["number"] = $_GET["number"] . $_SESSION["number"];
}

$output = $_SESSION["number"] ? bindec($_SESSION["number"]) : "0";
print(json_encode(["bin" => $_SESSION["number"], "dec" => $output]));

?>