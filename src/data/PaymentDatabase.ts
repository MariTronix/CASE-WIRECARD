import { TicketPayment } from './../model/Payment';
import { CreditPayment } from "../model/Payment";
import BaseDatabase from './BaseDatabase';

export class PaymentDatabase extends BaseDatabase {

    protected TABLE_NAME: string = "payment_wirecard";

    public async makeCreditPayment(payment: CreditPayment): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: payment.getId(), 
                amount: payment.getAmount(), 
                payment: payment.getPayment(),
                credit_card: payment.getCreditCard(),
                payment_situation: payment.getPaymentSituation(),
                user_id: payment.getUserId()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async makeTicketPayment(payment: TicketPayment): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: payment.getId(), 
                amount: payment.getAmount(), 
                payment: payment.getPayment(),
                payment_situation: payment.getPaymentSituation(),
                id_ticket: payment.getIdTicket(),
                user_id: payment.getUserId()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        };
    }

    public async getPaymentUserId(id: string): Promise<any>{
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({user_id: id})
            return result[0]
        } catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
} 