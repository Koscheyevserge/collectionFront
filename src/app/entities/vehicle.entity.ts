import { BaseEntity } from "./base.entity";
import { Model } from "./model.entity";
import { Agreement } from "./agreement.entity";
import { Lookup } from "./lookup.entity";

export class Vehicle extends BaseEntity {
  public model: Model;
  public number: string;
  public vin: string;
  public risk: VehicleRisk;
  public agreements: Agreement[];
}

export class VehicleRisk extends Lookup {
  public vehicles: Vehicle[];
}
