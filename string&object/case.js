const dist = "narail";
const thana = "Narail";

//!ekhane uppercase and lowercase er jonno same hocche na
//todo:same bananor jonno duita string ke lowercase baniye dibo

if (dist.toLowerCase() === thana.toLowerCase()) {
  //** */ lowercase banaisi*/

  console.log("same same");
} else {
  console.log("huhhh! same naah");
}
/**output
 * >>>same same
 */

const book = "  math";
const sub = "math  ";

//!white space er jonno duita same hobe na
//todo:duite string er sathe trim k add kora hoyese

if (book.trim() === sub.trim()) {
  //?white space effect feltese na

  console.log("sub r book eki jinis");
} else {
  console.log("sub r book alada");
}

/**
 * output
 * >>>sub r book eki jinis
 */