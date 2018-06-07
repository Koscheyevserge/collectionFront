import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'table-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class TableColumnsModalComponent {
  constructor(public dialogRef: MatDialogRef<TableColumnsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newHeader = data.header.map(function (column) {
      return { name: column.name, display: column.display, key: column.key }
    });
  }
  newHeader: any;
  toggle(column) {
    this.newHeader.find((col) => col.key == column.key).display = !column.display;
  }
  onYesClick(): void {
    this.dialogRef.close(this.newHeader);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
