import { Soldier } from "./Soldier";


export class Saxon extends Soldier{
    
    constructor(health:number, strength:number){

                super(health,strength);
}

attack(): number {
    return this.strength
}

receiveDamage(damage:number){

    this.health=this.health-damage

    if (this.health===0){
        return `A Saxon has died in combat`
    }
    else{
        return `A Saxon has received ${damage} points of damage`
    }

}

}