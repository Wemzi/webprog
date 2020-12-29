<?php
// $svg_storage = new JsonStorage("svg.json");
// $shapes = $svg_storage->query(function ($shape) {
//   return $shape["type"] !== "polyline" || count($shape["points"]) > 5;
// });

$svg_storage = json_decode(file_get_contents("svg.json", TRUE));

$shapes = array_filter($svg_storage, function ($shape) {
  return $shape["type"] !== "polyline" || count($shape["points"]) > 3;
});

?>

<svg width="200" height="150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="red">
  <?php foreach ($shapes as $shape) : ?>
    <?php if ($shape["type"] === "polyline") : ?>
      <polyline points="<?php foreach ($shape["points"] as $point) {
                          print($point["x"] . " " . $point["y"] . " ");
                        } ?>" />
    <?php elseif ($shape["type"] === "circle") : ?>
      <circle cx="<?= $shape["x"] ?>" cy="<?= $shape["y"] ?>" r="<?= $shape["r"] ?>" />
    <?php elseif ($shape["type"] === "ellipse") : ?>
      <ellipse cx="<?= $shape["x"] ?>" cy="<?= $shape["y"] ?>" rx="<?= $shape["rx"] ?>" ry="<?= $shape["ry"] ?>" />
    <?php endif; ?>
  <?php endforeach; ?>
</svg>