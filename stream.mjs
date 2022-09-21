import fs from "fs";

const writer=fs.createWriteStream("target.txt");

writer.write("Rama Fajar Fadhillah\t");
writer.write("2021\t");
writer.write("Teknik Informatika\t");
writer.end();

const reader=fs.createReadStream("target.txt");
reader.addListener("data", (data) => {
    console.log(data.toString());
})