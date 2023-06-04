export function isPasswordValid(password) {
  if (password.length < 8) {
    return false;
  }
  return true;
}

export function isNomValide(nom) {
  if (nom.length < 3) {
    return false;
  }
  return true;
}

export function isPhoneNumberValid(phoneNumber) {
  if (!/^(\+213|0)(5|6|7)[0-9]{8}$/.test(phoneNumber)) {
    return false;
  }
  return true;
}
