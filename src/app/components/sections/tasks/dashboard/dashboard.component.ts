import { Component, ViewChild, OnInit } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { Task } from '../../../../entities/task.entity';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Contact } from '../../../../entities/contact.entity';
import { Agreement } from '../../../../entities/agreement.entity';
import { Router } from '@angular/router';

export const MAT_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'tasks-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_FORMATS }
  ],
})
export class TasksDashboardComponent implements OnInit {
  date = new FormControl(new Date());
  tasks: Task[];
  constructor(private router: Router) { }

  ngOnInit() {
    //this.queryService.getAll().subscribe((tasks: Task[]) => this.tasks = tasks);
  }
  showDetails(id) {
    this.router.navigate(['/tasks/details', id]);
  }
  filteredTasks() {
    return this.tasks;
  }
  showCompleted(event: any) {

  }
  getClientName(task: Task): string {
    return task.client ? task.client.name : null;
  }
  getClientMainContactName(task: Task): string {
    var contact = this.getClientMainContact(task);
    return contact ? contact.name : null;
  }
  getClientMainContact(task: Task): Contact {
    var contacts = task.client
      ? task.client.contacts && task.client.contacts.length
        ? task.client.contacts.filter((contact) => contact.isMain)
        : null
      : null;
    return contacts && contacts.length ? contacts[0] : null;
  }
  getClientPhone(task: Task): string {
    var contact = this.getClientMainContact(task);
    return contact ? contact.communications[0].value : null;
  }
}

const TASK_DATA: Task[] = [
  {
    id: 1, date: new Date("01.01.2018"), description: "Позвонить клиенту по поводу задолженности", status: null,
    title: "Позвонить клиенту", client: null, user: null
  }
]
