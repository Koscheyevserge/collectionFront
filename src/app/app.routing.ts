import { Routes } from '@angular/router';

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

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'starter',
    pathMatch: 'prefix'
  }, {
    path: 'starter',
    component: StarterComponent
  }, {
    path: 'button',
    component: ButtonsComponent
  }, {
    path: 'grid',
    component: GridComponent
  }, {
    path: 'lists',
    component: ListsComponent
  }, {
    path: 'menu',
    component: MenuComponent
  }, {
    path: 'stepper',
    component: StepperComponent
  }, {
    path: 'expansion',
    component: ExpansionComponent
  }, {
    path: 'chips',
    component: ChipsComponent
  }, {
    path: 'toolbar',
    component: ToolbarComponent
  }, {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  }, {
    path: 'progress',
    component: ProgressComponent
  }, {
    path: 'dialog',
    component: DialogComponent
  }, {
    path: 'tooltip',
    component: TooltipComponent
  }, {
    path: 'snackbar',
    component: SnackbarComponent
  }, {
    path: 'slider',
    component: SliderComponent
  }, {
    path: 'slide-toggle',
    component: SlideToggleComponent
  }, {
    path: 'debts',
    component: DebtsComponent
  }, {
    path: 'agreements',
    component: AgreementsComponent
  }, {
    path: 'tasks',
    component: TasksComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'details', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: TasksDashboardComponent },
      { path: 'details/:id', component: TasksDetailsComponent },
      { path: 'stats', component: TasksStatsComponent },
    ]
  }
];
