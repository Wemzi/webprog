<?php
include_once(__DIR__ . '/storage.php');

class Auth {
  private $user_storage;
  private $user = NULL;

  public function __construct(IStorage $user_storage) {
    $this->user_storage = $user_storage;

    if (isset($_SESSION["user"])) {
      $this->user = $_SESSION["user"];
    }
  }

  public function register($data) {
    $user = [
      'teljesnev'  => $data['teljesnev'],
      'jelszo'  => password_hash($data['jelszo'], PASSWORD_DEFAULT),
      'tajszam'  => $data['tajszam'],
      'ertesitesicim' => $data['ertesitesicim'],
      'email' => $data['email'],
      'role'     => 'user',
    ];
    return $this->user_storage->add($user);
  }

  public function user_exists($username) {
    $users = $this->user_storage->findOne(['email' => $username]);
    return !is_null($users);
  }

  public function authenticate($username, $password) {
    $users = $this->user_storage->findMany(function ($user) use ($username, $password) {
      return $user['email'] === $username && 
             password_verify($password, $user['jelszo']);
    });
    return count($users) === 1 ? array_shift($users) : NULL;
  }
  
  public function is_authenticated() {
    return !is_null($this->user);
  }

  public function is_admin()
  {
    return $this->user['role'] === 'god';
  }

  public function authorize($roles = []) {
    if (!$this->is_authenticated()) {
      return FALSE;
    }
    foreach ($roles as $role) {
      if (in_array($role, $this->user["roles"])) {
        return TRUE;
      }
    }
    return FALSE;
  }

  public function login($user) {
    $this->user = $user;
    $_SESSION["user"] = $user;
  }

  public function logout() {
    $this->user = NULL;
    unset($_SESSION["user"]);
  }

  public function authenticated_user() {
    return $this->user;
  }
}