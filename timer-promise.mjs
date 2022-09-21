import { time } from "console";
import timers from "timers/promises";

// console.log("Mulai "+new Date());
// await timers.setTimeout(5000);
// console.log("Selesai "+new Date());

for await(const startTime of timers.setInterval(1000, new Date())){
    console.log(`Start Timer at ${startTime}`);
}