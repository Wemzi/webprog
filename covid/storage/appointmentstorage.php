<?php
include_once(__DIR__ . '/../lib/storage.php');

class AppStorage extends Storage {
  public function __construct() {
    parent::__construct(new JsonIO(__DIR__ . '/../data/apps.json'));
  }
}