import { Component, ViewChild, Input, Output, Inject, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TableColumnsModalComponent } from './columns/columns.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {
  selection = new SelectionModel<T>(true, []);
  applyFilter: (filterValue: string) => boolean;

  @Input()
  dataSource: MatTableDataSource<T>;  
  @Input()
  header: TableColumn<T>[];
  @Output()
  headerUpdate = new EventEmitter<TableColumn<T>[]>();
  @Input()
  options: TableOptions<T> = null;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort; 

  pagination: TablePaginationOptions;
  filtering: TableFilterOptions<T>;
  sorting: TableSortOptions;
  select: TableSelectOptions;
  columnDisabling: TableDisablingOptions;

  constructor(public dialog: MatDialog) {
    this.options = this.options
      || { pagination: null, columnDisabling: null, filtering: null, selection: null, sorting: null };
    this.pagination = this.options.pagination;
    this.filtering = this.options.filtering;
    this.sorting = this.options.sorting;
    this.select = this.options.selection;
    this.columnDisabling = this.options.columnDisabling;
  }

  openDialog(): void {
    var dialogRef = this.dialog.open(TableColumnsModalComponent, {
      width: '300px',
      data: {header: this.header}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
       this.headerUpdate.emit(result);
    });
  } 

  displayColumns() {
    var columns = this.header.filter((el) => el.display).map((el) => el.key)
    if (this.select && this.select.useSelection)
      columns.unshift('select')
    return columns;
  }  
  
  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }
  
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }
 
  ngAfterViewInit() {
    if (this.filtering && this.filtering.filterPredicate)
      this.dataSource.filterPredicate = this.filtering.filterPredicate;
    if (this.pagination && this.pagination.usePagination)
      this.dataSource.paginator = this.paginator;
    if (this.sorting && this.sorting.useSorting)
      this.dataSource.sort = this.sort;
  }
}

export class TableColumn<T> {
  cell: (row: T) => string;
  name: string;
  key: string;
  display: boolean;
}

export class TableOptions<T> {
  public pagination: TablePaginationOptions;
  public filtering: TableFilterOptions<T>;
  public sorting: TableSortOptions;
  public selection: TableSelectOptions;
  public columnDisabling: TableDisablingOptions;
}

export class TablePaginationOptions {
  usePagination: boolean;
  pageSize: number;
  pageSizeOptions: number[];
}

export class TableFilterOptions<T> {
  useFiltering: boolean;
  filterPredicate: (data: T, filter: string) => boolean;
  matchPredicate: (filterValue: string) => boolean;
}

export class TableSortOptions {
  useSorting: boolean;
}

export class TableSelectOptions {
  useSelection: boolean;
}

export class TableDisablingOptions {
  useColumnsDisabling: boolean;
}
