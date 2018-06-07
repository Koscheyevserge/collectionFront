import { BaseEntity } from "./base.entity";
import { Client } from "./client.entity";
import { Product } from "./product.entity";
import { Payment } from "./payment.entity";
import { Vehicle } from "./vehicle.entity";
import { Lookup } from "./lookup.entity";

export class Agreement extends BaseEntity {
  public client: Client;
  public number: string;
  public agreementDate: Date;
  public agreementPrice: number;
  public remainPrice: number;
  public commission: number;
  public vehiclePrice: number;
  public product: Product;
  public payments: Payment[];
  public vehicle: Vehicle;
  public region: string;
  public manager: string;
  public branch: string;
  public currency: string;
  public vsd: number;
  public priceUSD: number;
  public priceUAH: number;
  public status: AgreementStatus;
}

export class AgreementStatus extends Lookup {
  public agreements: Agreement[];
}
