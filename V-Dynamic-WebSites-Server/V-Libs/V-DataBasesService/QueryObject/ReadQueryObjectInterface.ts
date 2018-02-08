export interface ReadQueryObjectInterface {
    selectAttributes(...args: string[]): this;
    getQuery(): any;
}
