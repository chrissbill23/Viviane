import * as v from "validator";
export function isEmail(email: string): boolean {
    return v.isEmail(email);
}
