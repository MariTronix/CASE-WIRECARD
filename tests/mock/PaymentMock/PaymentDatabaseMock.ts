import { CreditPaymentMockDTO } from './../../../src/type/DTO/PaymentDTO';
export class PaymentDatabaseMock {
    public async makeCreditPayment(payment: CreditPaymentMockDTO): Promise<void>{};
    
    public async makeTicketPayment(payment: CreditPaymentMockDTO): Promise<void>{};

}