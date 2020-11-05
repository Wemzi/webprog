<?php
declare(strict_types=1);
function factorial(int $n) : int {
  $x=1
  for($i=1; $i<=$n;$i++)
  {
    $x *= $i;
  }  
  return $x;
}

// Beolvasás
$n = 3;

// Feldolgozás
$f = factorial($n);

// Kiírás
?>
<!DOCTYPE html>
<meta charset="UTF-8">
<title>Document</title>

<p><?= $n ?>! = <?= $f ?></p>