import { Agreement } from "./agreement.entity";
import { Lookup } from "./lookup.entity";

export class Product extends Lookup {
  public agreements: Agreement[];
}
