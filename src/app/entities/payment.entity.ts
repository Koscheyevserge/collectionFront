import { BaseEntity } from "./base.entity";
import { Agreement } from "./agreement.entity";

export class Payment extends BaseEntity {
  public agreement: Agreement;
  public date: Date;
  public amount: number;
  public commission: number;
}
