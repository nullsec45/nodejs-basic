import process from "process";
import readline from "readline";

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
}); 
input.question("Siapa nama kamu? : ",(name) => {
    console.log(`Hello ${name}`);
    input.close();
});
