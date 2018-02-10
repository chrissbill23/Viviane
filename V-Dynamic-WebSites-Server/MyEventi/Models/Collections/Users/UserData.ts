import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {NewsData} from "../News/NewsData";
import {EventData} from "../Events/EventData";
import {
    VArrayProperty,
    VGooseTypes, VProperty,
    VRefProperty, VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";

@VSchema()
export class UserData extends VDBMongoDocument {
    @VProperty({type: String})
    public name?: string;

    @VProperty({type: String})
    public surname?: string;

    @VProperty({type: String})
    public nickname?: string;

    @VProperty({type: String})
    public password?: string;

    @VProperty({type: String})
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
