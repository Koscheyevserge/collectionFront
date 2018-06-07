import { BaseEntity } from './base.entity';
import { Client } from './client.entity';
import { User } from './user.entity';
import { Lookup } from './lookup.entity';
import { Contact } from './contact.entity';

export class Task extends BaseEntity {
  public title: string;
  public description: string;
  public date: Date;
  public client: Client;
  public status: TaskStatus;
  public user: User;
}

export class TaskStatus extends Lookup {
  public tasks: Task[];
}
