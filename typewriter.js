const sentence = "hello there from lighthouse labs";
//const sent = sentence + "\n";
let num = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, num);
  num += 50;
}
setTimeout(() => {
  console.log();
}, num);
