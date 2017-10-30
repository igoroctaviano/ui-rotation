function AuthController() {
  var roles;
  function setRoles(role) {
    roles = role;
  }

  function isAuthorized(neededRole) {
    return roles.indexOf(neededRole) >= 0;
  }

  function isAuthorizedAsync(neededRole, callback) {
    setTimeout(() => callback(roles.indexOf(neededRole) >= 0), 0);
  }

  return { isAuthorized, isAuthorizedAsync, setRoles };
}

module.exports = AuthController();
