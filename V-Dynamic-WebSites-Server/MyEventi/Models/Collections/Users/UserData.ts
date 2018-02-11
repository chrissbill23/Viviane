import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {NewsData} from "../News/NewsData";
import {EventData} from "../Events/EventData";
import {
    Validator,
    VArrayProperty, VGooseTypes, VProperty, VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {isEmail} from "../../../../V-Utils/V-Validators/V-Validators";

@VSchema()
export class UserData extends VDBMongoDocument {
    @VProperty({type: String, required: true})
    public name: string;

    @VProperty({type: String, required: true})
    public surname: string;

    @VProperty({type: String, required: true, unique: true})
    public nickname: string;

    @VProperty({type: String, required: true})
    public password?: string;

    @Validator(isEmail, 'Email is not correct')
    @VProperty({type: String, required: true})
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
}
