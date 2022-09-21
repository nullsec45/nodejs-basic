const buffer=Buffer.from("Rama Fajar Fadhillah", "utf-8");
const base64=Buffer.from("UmFtYSBGYWphciBGYWRoaWxsYWg=","base64");

console.log(buffer.toString());
console.log(buffer.toString("base64"));
console.log(buffer.toString("hex"));
console.log(base64.toString());
