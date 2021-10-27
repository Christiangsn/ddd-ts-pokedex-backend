class Wheater {
    public id?: string;
    public wheater: string;

    constructor(props: Wheater) {
        Object.assign(this, props);
    }
}

export { Wheater }