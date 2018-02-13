/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

export interface ReadQueryObjectInterface {
    selectAttributes(...args: string[]): this;
    getQuery(): any;
}
