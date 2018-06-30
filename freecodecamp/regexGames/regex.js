// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

// 2) Username letters can be lowercase and uppercase.

// 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

let usernames = ['JACK', 'JackOfAllTrades', 'J', 'Oceans11', 'RegexGuru', '007', '9'];
let userCheck = /^\D{2,}/i; // Change this line
for (let i=0; i<usernames.length; i++){
  let result = usernames[i].match(userCheck);
  let test = userCheck.test(usernames[i])
  console.log(usernames[i], result, test)
}