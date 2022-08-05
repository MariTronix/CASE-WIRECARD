import { UserMockDTO } from "../../../src/type/DTO/UserDTO";
import { userMock } from "./UserMock";

export class UserDatabaseMock {
    public async insertUser(user: UserMockDTO): Promise<void> {};

    public async selectUserByEmail(email :string): Promise<UserMockDTO | undefined> {
        switch(email){
            case "email@dev.com":
                return userMock
            default: 
                return undefined
        }
    };
}