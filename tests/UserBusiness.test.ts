import { UserDatabase } from './../src/data/UserDatabase';
import { Authenticator } from '../src/services/Authenticator';
import { HashManager } from '../src/services/HashManager';
import { IdGenerator } from '../src/services/IdGenerator';
import { UserBussiness } from './../src/business/UserBusiness';
import { UserMockDTO } from '../src/type/DTO/UserDTO';
import { CustomError } from '../src/error/CustomError';

const UserBussinessMock = new UserBussiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDatabase()
);

describe("Sing Tests", () => {
    test ("Name fiel is empty", async () => {
        try{
            const inputMock: UserMockDTO = {
                id: "id",
                name: "",
                email: "email@dev.com",
                cpf: "cpf",
                password: "password"    
            };

            await UserBussinessMock.singup(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The name input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("Email fiel is empty", async () => {
        try{
            const inputMock: UserMockDTO = {
                id: "id",
                name: "name",
                email: "",
                cpf: "cpf",
                password: "password"    
            };

            await UserBussinessMock.singup(inputMock);
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The email input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("CPF fiel is empty", async () => {
        try{
            const inputMock: UserMockDTO = {
                id: "id",
                name: "name",
                email: "email@dev.com",
                cpf: "",
                password: "password"    
            };

            await UserBussinessMock.singup(inputMock);
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The cpf input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("Password fiel is empty", async () => {
        try{
            const inputMock: UserMockDTO = {
                id: "id",
                name: "name",
                email: "email@dev.com",
                cpf: "cpf",
                password: ""    
            };

            await UserBussinessMock.singup(inputMock);
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Your CPF must be contain 11 numbers");
              expect(error.statusCode).toEqual(422);
            }
        }
    });
    
    test("Create User", async () => {
        try{
            const inputMock: UserMockDTO = {
                id: "id",
                name: "name",
                email: "email@dev.com",
                cpf: "cpf",
                password: "password"
            };

            await UserBussinessMock.singup(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
})

describe("Login Tests", () => {
    test("Email fiel is empty", async () => {
        try{
            const inputMock = {
                email: "",
                password: "password"
            };

            await UserBussinessMock.login(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The email input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Password fiel is empty", async () => {
        try{
            const inputMock = {
                email: "email@dev.com",
                password: ""
            };

            await UserBussinessMock.login(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Invalid credentials");
              expect(error.statusCode).toEqual(401);
            }
        }
    });

    test("Login Successfully", async () => {
        try{
            const inputMock = {
                email: "email@dev.com",
                password: "password"
            };

            await UserBussinessMock.login(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
        }
        }
    });
})