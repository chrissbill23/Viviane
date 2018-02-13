/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {NewsData} from "../News/NewsData";
import {EventData} from "../Events/EventData";
import * as crypto from "crypto";
import {
    Validator,
    VArrayProperty, VBeforeSave, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {isEmail} from "../../../../V-Utils/V-Validators/V-Validators";

@VSchema()
@VBeforeSave(true, function(next, done) {
    next();
    if (this.password != undefined ) {
        this.password = UserData.hashPassword(this.password, this.passwordSalt,
            this.passwordIteration, UserData.PASSWORD_LENGTH);
    }
    done();
})
export class UserData extends VDBMongoDocument {
    public static SALT_LENGTH = 64;
    public static PASSWORD_LENGTH = 64;

    @VProperty({type: String, required: true})
    public name?: string;

    @VProperty({type: String, required: true})
    public surname?: string;

    @VProperty({type: String, required: true, unique: true})
    @VIndexedProp(1)
    public nickname?: string;

    @VProperty({type: String, required: true})
    public password?: string;

    @VProperty({type: String, required: true, default: UserData.generateSalt()})
    public passwordSalt?: string;

    @VProperty({type: Number, required: true, default: 8})
    public passwordIteration?: number;

    @Validator(isEmail, 'Email is not correct')
    @VProperty({type: String, required: true})
    @VIndexedProp(1)
    public email?: string;

    @VProperty({type: Boolean, default: false})
    public isPremium?: boolean;

    @VProperty({type: Boolean, default: false})
    public isAdmin?: boolean;

    @VProperty({type: Date})
    public lastLogin?: Date;

    @VProperty({type: Boolean, default: false})
    public isBlocked?: boolean;

    @VProperty({type: String, default: ''})
    public reasonBlocked?: string;

    @VArrayProperty({type: VGooseTypes.ObjectId, ref: UserData})
    public followers?: UserData[];

    @VArrayProperty({type: VGooseTypes.ObjectId, ref: UserData})
    public follows?: UserData[];

    @VArrayProperty({type: VGooseTypes.ObjectId, ref: NewsData})
    public news?: NewsData[];

    @VArrayProperty({type: VGooseTypes.ObjectId, ref: EventData})
    public createdEvents?: EventData[];

    public static generateSalt() {
        return crypto.randomBytes(UserData.SALT_LENGTH).toString('base64');
    }
    public static hashPassword(password: string, passwordSalt: string,
                               passwordIteration: number, passwordLength: number): string {
        return crypto
            .pbkdf2Sync(
                password,
                passwordSalt,
                passwordIteration,
                passwordLength,
                'sha512')
            .toString('base64');
    }

    @VMethodProperty
    public isAuthenticated(password: string) {
        return UserData.hashPassword(password, this.passwordSalt,
            this.passwordIteration, UserData.PASSWORD_LENGTH) === this.password;
    }
    @VMethodProperty
    public getData(): any {
        return {
            name: this.name,
            surname: this.surname,
            nickname: this.nickname,
        };
    }
}
