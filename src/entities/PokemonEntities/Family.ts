import { Pokemon } from ".";

class Family {
    public id?: string;
    public family: string;

    constructor(props: Family) {
        Object.assign(this, props)
    }
}

export { Family }