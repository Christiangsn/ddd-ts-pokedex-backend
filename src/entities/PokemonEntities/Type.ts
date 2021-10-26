class Type {
  public id?: string;
  public idType: number;
  public description: string;

  constructor (props: Type) {
    Object.assign(this, props)
  }
}

export { Type }
