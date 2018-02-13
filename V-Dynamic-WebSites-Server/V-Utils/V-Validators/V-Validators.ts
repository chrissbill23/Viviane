/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import * as v from "validator";
export function isEmail(email: string): boolean {
    return v.isEmail(email);
}
