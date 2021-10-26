
class Generation {
    public id?: string;
    public numberGeneration: number;
    public description: string;

    constructor(props: Generation){
        Object.assign(this,props);
    }
}

export { Generation }