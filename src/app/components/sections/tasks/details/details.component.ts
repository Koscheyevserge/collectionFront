import { Component, ViewChild, OnInit } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../../entities/task.entity';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Contact } from '../../../../entities/contact.entity';
import { TableColumn } from '../../../widgets/table/table.component';
import { Agreement } from '../../../../entities/agreement.entity';
import { MatTableDataSource } from '@angular/material';
import { Input } from '@angular/core/src/metadata/directives';
import { Transaction } from '../../../../entities/transaction.entity';
import { Payment } from '../../../../entities/payment.entity';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

export const MAT_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};
@Component({
  selector: 'task-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_FORMATS },
  ],
})
export class TasksDetailsComponent implements OnInit {
  id: number;
  date = new FormControl(new Date());
  task: Task;
  results = RESULT_DATA;
  resultFormGroup: FormGroup;
  actionFormGroup: FormGroup;
  agreementsHeader = [
    {name: 'Номер', key: 'number', display: true, cell: (row: Agreement) => `${row.number}` },
    { name: 'Стоимость', key: 'agreementPrice', display: true, cell: (row: Agreement) => `${row.agreementPrice}` },
    { name: 'Статус', key: 'status', display: true, cell: (row: Agreement) => `${row.status.name}` }
  ];
  transactionsHeader = [
    { name: 'Номер', key: 'code', display: true, cell: (row: Transaction) => `${row.code}` },
    { name: 'Дата', key: 'date', display: true, cell: (row: Transaction) => `${row.date.toLocaleDateString()}` },
    { name: 'Сумма, грн', key: 'amount', display: true, cell: (row: Transaction) => `${row.amount}` }
  ];
  paymentsScheduleHeader = [
    { name: 'Номер', key: 'number', display: true, cell: (row: Payment) => `${row.agreement.number}` },
    { name: 'Дата', key: 'date', display: true, cell: (row: Payment) => `${row.date.toLocaleDateString()}` },
    { name: 'Тело, грн', key: 'amount', display: true, cell: (row: Payment) => `${row.amount}` },
    { name: 'Процент, грн', key: 'comission', display: true, cell: (row: Payment) => `${row.commission}` }
  ];
  agreementsDataSource : MatTableDataSource<Agreement>;
  transactionsDataSource : MatTableDataSource<Transaction>;
  paymentsScheduleDataSource : MatTableDataSource<Payment>;
  test: any;
  chartData = [
    /*{
      values: this.getPayments().map(function (p: Payment) { return { x: p.date, y: p.amount + p.commission }; }),
      key: 'График платежей',
      color: '#4285f4',
      strokeWidth: 2,
      classed: 'dashed'
    },
    {
      values: this.task.client.transactions.map(function (t: Transaction) { return { x: t.date, y: t.amount }; }),
      key: 'Оплаты клиента',
      color: '#db4437'
    }*/
  ];

  constructor(private _formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.resultFormGroup = this._formBuilder.group({
      resultCtrl: ['', Validators.required]
    });
    this.actionFormGroup = this._formBuilder.group({
      actionCtrl: ['', Validators.required]
    });
    this.task = TASK_DATA;    
    this.agreementsDataSource = new MatTableDataSource<Agreement>(this.task.client.agreements);
    this.transactionsDataSource = new MatTableDataSource<Transaction>(this.task.client.transactions);
    this.paymentsScheduleDataSource = new MatTableDataSource<Payment>(this.getPayments());
  }

  getPayments() {
    var payments = [];       
    this.task.client.agreements.forEach(function (agreement) {
      agreement.payments.forEach(function (payment) {
        payment.agreement = agreement;
        payments.push(payment);
      });
    });
    return payments;
  }

  getResultName() {
    var id = this.resultFormGroup.controls['resultCtrl'].value;
    var result = this.results.find((result) => result.conditions.filter((condition) => condition.id == id).length > 0);
    return result ? result.name : 'Результат';
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

const TASK_DATA: Task = 
  {
    id: 1, date: new Date(), title: "Оповестить получателя о задолженности",
    description: "Позвонить клиенту и сообщить о задолженности", client: {
      id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: "37115572", risk: {
        clients: null, id: 1, name: "Н", description: "Низкий"
      }, agreements: [
        {
          id: 1, agreementDate: new Date(), agreementPrice: 10000, branch: "Полтава", client: null,
          commission: 3, currency: "UAH", manager: "Иванченко Елена Викторовна", product: {
            id: 1, name: "Стандарт 2017", description: "", agreements: null
          }, vsd: 36, region: "Полтава", status: {
            id: 1, agreements: null, name: "Активен", description: "Договор в процессе выполнения"
          }, priceUAH: 10000, priceUSD: 380, vehiclePrice: 9000, remainPrice: 0, vehicle: {
            id: 1, agreements: null, vin: "123", number: "ФФ0000ФФ", risk: {
              id: 1, name: "Н", description: "Низкий", vehicles: null
            }, model: {
              id: 1, name: "Passat", vehicles: null, description: "", manufacturer: {
                id: 1, name: "VW", models: null, description: ""
              }
            }
          }, number: "ДФЛ №4708-01/10/16-В від 07.10.16", payments: [
            {
              id: 1, date: new Date('05.07.2018'), agreement: null, amount: 3200, commission: 2000
            },
            {
              id: 2, date: new Date('05.10.2018'), agreement: null, amount: 3200, commission: 1000
            },
            {
              id: 3, date: new Date('05.13.2018'), agreement: null, amount: 3200, commission: 500
            }
          ]
        }
      ],
      address: "36008, м. Полтава, вул. Європейська, буд. 225", transactions: [
        {
          id: 1, date: new Date('05.09.2018'), client: null, amount: 3500, code: "UX342"
        },
        {
          id: 2, date: new Date('05.12.2018'), client: null, amount: 3200, code: "UX342"
        },
        {
          id: 3, date: new Date('05.14.2018'), client: null, amount: 1000, code: "UX342"
        }
      ], status: {
        id: 1, clients: null, name: "Долги до 30 дней", description: "Имеются долги до 30 дней"
      },
      specialization: "Оптова торгівля зерном, необробленим тютюном, насінням і кормами для тварин",
      contacts: [
        {
          client: null, id: 1, isMain: true, name: "Серебрякова Светлана Игоревна", communications: [
            {
              contact: null, id: 1, value: "+380975556501", type: null
            }
          ]
        }
      ]
    }, status: {
      id: 1, tasks: null, name: "Активна", description: "Задача активна"
    }, user: null
  }

const RESULT_DATA = [
  { id: 1, name: "Дозвонился", conditions: [{ id: 1, name: "Согласился платить" }, { id: 2, name: "Отказался платить" }] },
  { id: 2, name: "Не дозвонился", conditions: [] }
];
