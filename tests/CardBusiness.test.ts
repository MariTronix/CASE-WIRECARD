import { CardDatabase } from './../src/data/CardDatabase';
import { IdGenerator } from './../src/services/IdGenerator';
import { CardBussiness } from './../src/business/CardBussiness';
import { HashManager } from '../src/services/HashManager';
import { Authenticator } from '../src/services/Authenticator';
import { CardMockDTO } from '../src/type/DTO/CardDTO';
import { CustomError } from '../src/error/CustomError';

const CardBussinessMock = new CardBussiness(
    new IdGenerator(),
    new HashManager(),
    new CardDatabase(),
    new Authenticator()
);

describe("Create Card Test", () => {
    test("Number fiel is empyt", async () => {
        try{
            const inputMock: CardMockDTO = {
                id: "id",
                number: "",
                name: "name",
                expiration: "expiration",
                cvv: "cvv",
                token: "token"
            };

            await CardBussinessMock.insertCard(inputMock);

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The number input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Name fiel is empyt", async () => {
        try{
            const inputMock: CardMockDTO = {
                id: "id",
                number: "number",
                name: "",
                expiration: "expiration",
                cvv: "cvv",
                token: "token"
            };

            await CardBussinessMock.insertCard(inputMock);

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Your number must be contain 16 numbers");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Expiration fiel is empyt", async () => {
        try{
            const inputMock: CardMockDTO = {
                id: "id",
                number: "number",
                name: "name",
                expiration: "",
                cvv: "cvv",
                token: "token"
            };

            await CardBussinessMock.insertCard(inputMock);

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Your number must be contain 16 numbers");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("CVV fiel is empyt", async () => {
        try{
            const inputMock: CardMockDTO = {
                id: "id",
                number: "number",
                name: "name",
                expiration: "expiration",
                cvv: "",
                token: "token"
            };

            await CardBussinessMock.insertCard(inputMock);

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Your number must be contain 16 numbers");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Number fiel is empyt", async () => {
        try{
            const inputMock: CardMockDTO = {
                id: "id",
                number: "number",
                name: "name",
                expiration: "expiration",
                cvv: "cvv",
                token: ""
            };

            await CardBussinessMock.insertCard(inputMock);

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Your number must be contain 16 numbers");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Create Crad", async () => {
        try{
            const inputMock: CardMockDTO = {
                id: "id",
                number: "number",
                name: "name",
                expiration: "expiration",
                cvv: "cvv",
                token: "token"
            };

            await CardBussinessMock.insertCard(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
})