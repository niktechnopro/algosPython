function isPassword(password) {
    let reqMet = false;
    let capLetter = false;
    let oneNum = false;
    const arr = password.split('');
    arr.forEach((char) => {
      if (!isNaN(parseInt(char, 10))) {
        oneNum = true;
      } else if (char === char.toUpperCase()) {
        capLetter = true;
      }
    });
    console.log(capLetter, oneNum )
    if (capLetter && oneNum && arr.length > 6) {
      reqMet = true;
    }
    return reqMet;
  }


console.log(isPassword('Password1234'));
