export interface CreditPaymentDTO {
    amount: number, 
    credit_card: string,
    token: string
}

export interface CreditPaymentMockDTO {
    id: string,
    amount: number, 
    credit_card: string,
    token: string
}

export interface TicketPaymentDTO {
    amount: number, 
    token: string,
    ticket_id: string
}

export interface TicketPaymentMockDTO {
    id: string,
    amount: number, 
    token: string
    ticket_id: string
}