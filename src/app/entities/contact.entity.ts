import { BaseEntity } from "./base.entity";
import { Client } from "./client.entity";
import { Lookup } from "./lookup.entity";

export class Contact extends BaseEntity {
  public client: Client;
  public isMain: boolean;
  public name: string;
  public communications: Communication[];
}

export class Communication extends BaseEntity {
  public type: CommunicationType;
  public value: string;
  public contact: Contact;
}

export class CommunicationType extends Lookup {
  public communications: Communication[];
}
