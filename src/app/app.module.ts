import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { SharedModule } from './shared/shared.module';
import { AppHeaderComponent } from './components/layout/header/header.component';
import { AppSidebarComponent } from './components/layout/sidebar/sidebar.component';
import { MatPaginatorIntl } from '@angular/material';
export class MatPaginatorIntlRus extends MatPaginatorIntl {
  itemsPerPageLabel = 'Записей на странице';
  nextPageLabel = 'Следующая страница';
  previousPageLabel = 'Предыдущая страница';

  getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 из ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' из ' + length;
  };
}

import 'hammerjs';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import 'd3';
import 'nvd3'
import { NvD3Module } from "ng2-nvd3";

import { CdkTableModule } from '@angular/cdk/table';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './components/sections/buttons/buttons.component';
import { ChartComponent } from './components/widgets/chart/chart.component';
import { GridComponent } from './components/sections/grid/grid.component';
import { DebtsComponent } from './components/sections/debts/debts.component';
import { AgreementsComponent } from './components/sections/agreements/agreements.component';
import { TasksDashboardComponent } from './components/sections/tasks/dashboard/dashboard.component';
import { TasksDetailsComponent } from './components/sections/tasks/details/details.component';
import { TasksStatsComponent } from './components/sections/tasks/stats/stats.component';
import { TasksComponent } from './components/sections/tasks/tasks.component';
import { ListsComponent } from './components/sections/lists/lists.component';
import { MenuComponent } from './components/sections/menu/menu.component';
import { StepperComponent } from './components/sections/stepper/stepper.component';
import { ExpansionComponent } from './components/sections/expansion/expansion.component';
import { ChipsComponent } from './components/sections/chips/chips.component';
import { ToolbarComponent } from './components/sections/toolbar/toolbar.component';
import { TableComponent } from './components/widgets/table/table.component';
import { TableColumnsModalComponent } from './components/widgets/table/columns/columns.component';
import { ProgressSnipperComponent } from './components/sections/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/sections/progress/progress.component';
import { DialogComponent, DialogOverviewExampleDialog } from './components/sections/dialog/dialog.component';
import { TooltipComponent } from './components/sections/tooltip/tooltip.component';
import { SnackbarComponent } from './components/sections/snackbar/snackbar.component';
import { SliderComponent } from './components/sections/slider/slider.component';
import { SlideToggleComponent } from './components/sections/slide-toggle/slide-toggle.component';
import { StarterComponent } from './components/sections/starter/starter.component';
import { FileManagerComponent } from './components/widgets/filemanager/filemanager.component';
import { QueryService } from './services/query.service';
import { CommandService } from './services/command.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,  
    HttpClientModule,
    SharedModule,  
    RouterModule.forRoot(AppRoutes),
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    CdkTableModule,
    NvD3Module
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRus },
    QueryService, CommandService
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    StarterComponent,
    ButtonsComponent,
    ChartComponent,
    GridComponent,
    DebtsComponent,
    AgreementsComponent,
    TasksDashboardComponent,
    TasksDetailsComponent,
    TasksStatsComponent,
    TasksComponent,
    ListsComponent,
    MenuComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    TableComponent,
    TableColumnsModalComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    FileManagerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
