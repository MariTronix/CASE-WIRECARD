import { Card } from "../model/Card";
import BaseDatabase  from "./BaseDatabase";


export class CardDatabase extends BaseDatabase {

    protected TABLE_NAME: string = "card_wirecard";

    public async createCard(card: Card): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: card.getId(), 
                NUMBER: card.getNumber(), 
                name: card.getName(),
                expiration: card.getExpiration(),
                cvv: card.getCVV(),
                user_id: card.getUserId()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        };
    }

    public async getCardById(id: string): Promise<Card[]> {
        try{
            const [result] = await BaseDatabase.connection(this.TABLE_NAME).where(
                "id", id
            )
            return result
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
} 