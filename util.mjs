import util from "util";

const firstName="Rama";
const lastName="Fajar";

console.info(`Hello ${firstName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person={
    firstName:"Rama",
    lastName:"Fajar"
}

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));

