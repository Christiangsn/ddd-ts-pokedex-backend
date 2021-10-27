import type { WheaterEntitiyContract, WheaterEntityInput} from "@domain:WheaterContract";

class IWheaterEntity implements WheaterEntitiyContract {
    public id?: string;
    public wheater: string;

    constructor( props: WheaterEntityInput ) {
        this.id = props.id;
        this.wheater = props.wheater;
    
        Object.freeze(this)
    }
}

export { IWheaterEntity }