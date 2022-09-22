import {Console} from "console";
import fs from "fs";

const file=fs.createWriteStream("application.log");


const log=new Console({
    stdout:file,
    stderr:file,
})

log.info("Hello World");
log.error("Error cuy");

const person={
    firstName:"Rama",
    lastName:"Fajar"
}
log.table(person);