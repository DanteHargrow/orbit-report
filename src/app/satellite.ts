export class Satellite {
    name: string;
    orbiteType: string;
    type: string
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.launchDate = launchDate;
        this.orbiteType = orbitType;
        this.operational = operational;
        this.type = type;
    }
}
