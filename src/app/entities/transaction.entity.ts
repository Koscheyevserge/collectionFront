import { BaseEntity } from "./base.entity";
import { Client } from "./client.entity";

export class Transaction extends BaseEntity {
  public client: Client;
  public amount: number;
  public date: Date;
  public code: string;
}
