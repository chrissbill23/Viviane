export interface ReadQueryObjectInterface {
    selectAttributesOfData(...args: string[]): ReadQueryObjectInterface;
    getQuery(): any;
}
