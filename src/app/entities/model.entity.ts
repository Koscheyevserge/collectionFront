import { Manufacturer } from "./manufacturer.entity";
import { Vehicle } from "./vehicle.entity";
import { Lookup } from "./lookup.entity";

export class Model extends Lookup {
  public manufacturer: Manufacturer;
  public vehicles: Vehicle[];
}
