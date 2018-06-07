import { BaseEntity } from "./base.entity";
import { Agreement } from "./agreement.entity";
import { Transaction } from "./transaction.entity";
import { Contact } from "./contact.entity";
import { Lookup } from "./lookup.entity";

export class Client extends BaseEntity {
  public name: string;
  public code: string;
  public risk: ClientRisk;
  public address: string;
  public specialization: string;
  public agreements: Agreement[];
  public transactions: Transaction[];
  public contacts: Contact[];
  public status: ClientStatus;
}

export class ClientRisk extends Lookup {
  public clients: Client[];
}

export class ClientStatus extends Lookup {
  public clients: Client[];
}
