import { CreditPaymentMockDTO, TicketPaymentMockDTO } from './../../../src/type/DTO/PaymentDTO';

export const creditPaymentMock: CreditPaymentMockDTO = {
    id: "id",
    amount: 1,
    credit_card: "credit_card",
    token: "token" 
}

export const ticketPaymentMock: TicketPaymentMockDTO = {
    id: "id",
    amount: 1,
    token: "token",
    ticket_id: "idticket"
}