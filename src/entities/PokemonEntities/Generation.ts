
class GenerationEntity {
    public id?: string;
    public numberGeneration: number;
    public description: string;

    constructor(props: GenerationEntity){
        Object.assign(this,props);
    }
}

export { GenerationEntity }