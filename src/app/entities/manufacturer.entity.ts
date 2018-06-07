import { Model } from "./model.entity";
import { Lookup } from "./lookup.entity";

export class Manufacturer extends Lookup {
  public models: Model[];
}
