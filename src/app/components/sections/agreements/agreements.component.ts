import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TableColumn } from '../../widgets/table/table.component';
import { Agreement } from '../../../entities/agreement.entity';

@Component({
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.scss']
})
export class AgreementsComponent {
  header: TableColumn<Agreement>[] = [
    { name: 'Клиент', key: 'client', display: true, cell: (row: Agreement) => `${row.client.name}` },
    {name: 'ЕГРПОУ', key: 'code', display: true, cell: (row: Agreement) => `${row.client.code}`},
    {name: 'Продукт', key: 'product', display: true, cell: (row: Agreement) => `${row.product.name}`},
    { name: 'Стоимость договора', key: 'agreementPrice', display: true, cell: (row: Agreement) => `${row.agreementPrice} ${row.currency}`}
  ];
  headerUpdate(newHeader): void {
    this.header.forEach(function (column) {
      column.display = newHeader.find((nc) => nc.key == column.key).display;
    });
  }
  loading = false;
  dataSource = new MatTableDataSource<Agreement>(AGREEMENT_DATA);  
}

const AGREEMENT_DATA: Agreement[] = [
  {
    client: {
      id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: "37115572", risk: null, agreements: null,
      address: "36008, м. Полтава, вул. Європейська, буд. 225", transactions: null, status: null,
      specialization: "Оптова торгівля зерном, необробленим тютюном, насінням і кормами для тварин",
      contacts: null
    }, product: {
      id: 1, name: "СТАНДАРТ 2017", description: "30.00%, 36 мес.", agreements: null
    }, payments: null, vehicle: null, id: 1, agreementDate: new Date("2017-09-05"), vehiclePrice: 903361,
    remainPrice: 0, commission: 2.5, agreementPrice: 1571939.13, status: null, region: "ЦР", number: "ДФЛ №4708-01/10/16-В від 07.10.16",
    manager: "Ірина Молько", branch: "Полтава", currency: "UAH", vsd: 38, priceUSD: 29084, priceUAH: 748861
  }
]

