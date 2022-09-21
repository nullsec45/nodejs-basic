import process from "process";

process.addListener("exit", function(exitCode){
    console.info(`Node JS exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.info(process.exit(5));
// console.info(process.env);