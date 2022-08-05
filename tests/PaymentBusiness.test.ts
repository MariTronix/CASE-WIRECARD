import { ticketPaymentMock } from './mock/PaymentMock/PaymentMock';
import { CreditPaymentMockDTO, TicketPaymentMockDTO } from './../src/type/DTO/PaymentDTO';
import { PaymentDatabase } from './../src/data/PaymentDatabase';
import { CardDatabase } from '../src/data/CardDatabase';
import { Authenticator } from '../src/services/Authenticator';
import { IdGenerator } from '../src/services/IdGenerator';
import { PaymentBussiness } from './../src/business/PaymentBusiness';
import { CustomError } from '../src/error/CustomError';

const PaymentBussinessMock = new PaymentBussiness(
    new IdGenerator(),
    new Authenticator(),
    new CardDatabase(),
    new PaymentDatabase()
);

describe("Create Payment Credit", () => {
    test ("Amout fiel is empty", async () => {
        try{
            const inputMock: CreditPaymentMockDTO = {
                id: "id",
                amount: 0,
                credit_card: "credit_card",
                token: "token"    
            };

            await PaymentBussinessMock.makeCreditPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The amount input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("Card Credit fiel is empty", async () => {
        try{
            const inputMock: CreditPaymentMockDTO = {
                id: "id",
                amount: 1,
                credit_card: "",
                token: "token"    
            };

            await PaymentBussinessMock.makeCreditPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The credit card input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("Token fiel is empty", async () => {
        try{
            const inputMock: CreditPaymentMockDTO = {
                id: "id",
                amount: 1,
                credit_card: "credit_card",
                token: ""    
            };

            await PaymentBussinessMock.makeCreditPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The token input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("Create Payment Credit", async () => {
        try{
            const inputMock: CreditPaymentMockDTO = {
                id: "id",
                amount: 1,
                credit_card: "credit_card",
                token: "token"    
            };

            await PaymentBussinessMock.makeCreditPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
})

describe("Create Payment Ticket", () => {
    test ("Amout fiel is empty", async () => {
        try{
            const inputMock: TicketPaymentMockDTO = {
                id: "id",
                amount: 0,
                token: "token",
                ticket_id: "idticket"    
            };

            await PaymentBussinessMock.makeTicketPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The amount input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });


    test ("Token fiel is empty", async () => {
        try{
            const inputMock: TicketPaymentMockDTO = {
                id: "id",
                amount: 1,
                token: "",
                ticket_id: "idticket"   
            };

            await PaymentBussinessMock.makeTicketPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The token input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test ("Create Payment Ticket", async () => {
        try{
            const inputMock: TicketPaymentMockDTO = {
                id: "id",
                amount: 1,
                token: "token",
                ticket_id: "idticket"  
            };

            await PaymentBussinessMock.makeTicketPayment(inputMock);
            
        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
})