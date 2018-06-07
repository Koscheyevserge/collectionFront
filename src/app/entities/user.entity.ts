import { Department } from "./department.entity";

export class User {
  public id: string;
  public name: string;
  public department: Department;
  public isManager: boolean;
}
