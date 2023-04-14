class Person{
    declare firstName: string;
    declare lastName: string;

    constructor(fistName: string, lastName: string){
        this.firstName = fistName;
        this.lastName = lastName;
    }

    getFirstName(): string{
        return this.firstName;
    }
}

export class Player extends Person{
    declare sportName: string;
    declare jerseyNumber: number;

    constructor(firstName: string, lastName: string, sportName: string, jerseyNumber: number){
        super(firstName, lastName)
        this.sportName = sportName
        this.jerseyNumber = jerseyNumber
    }

    toString(): string {
        return `${this.firstName} ${this.lastName} plays ${this.sportName} and wears number ${this.jerseyNumber}.`
    }
}

export class Logger {
    private static instance: Logger;

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    info(message: string){
        console.log(`\n    ${new Date()}: ${message}  \n`)
    }
}
