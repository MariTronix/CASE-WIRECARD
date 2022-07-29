export interface CreditPaymentDTO {
    amount: number,
    payment: string,
    credit_card: string,
    payment_situation: string,
    user_id: string
}

export interface CreditPaymentMockDTO {
    id: string,
    amount: number,
    payment: string,
    credit_card: string,
    payment_situation: string,
    user_id: string
}

export interface TicketPaymentDTO {
    amount: number,
    payment: string,
    payment_situation: string,
    id_ticket: string,
    user_id: string
}

export interface TicketPaymentMockDTO {
    id: string,
    amount: number,
    payment: string,
    payment_situation: string,
    id_ticket: string,
    user_id: string
}