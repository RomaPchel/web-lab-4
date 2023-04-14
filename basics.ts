import { User } from "./interfaces";
import {Logger, Player} from "./classes"

const age: number = 15;
const firstName: string = "John";

const user: User = {
    firstName: firstName,
    age: age
}

console.log(user);

const digits: number[] = [1,2,3,4,5,6,7,8,9];

for(const digit of digits){
    console.log(digit);
}

const brokenString: string = " Joh n ";

const fixedString: string = brokenString.trim().split(" ").join("");

console.log(fixedString);

const player: Player = new Player("Kawhi", "Leonard", "Basketball", 2)

console.log(player.toString())

const log: Logger = Logger.getInstance()

log.info("Hello from logger.")