function sendNotification(email) {
  if (email.includes("@")) {
    let char = email.split("@");
    const first = char[0];
    const second = char[1];
    const result = first + " sent you an email from " + second;
    return result;
  } else {
    return "Invalid Email";
  }
}
const mail = "sadia8icloud.com";
const output = sendNotification(mail);
console.log(output);
