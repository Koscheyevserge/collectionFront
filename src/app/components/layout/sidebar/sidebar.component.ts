import { ChangeDetectorRef, Component, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements AfterViewInit {
  mobileQuery: MediaQueryList;
  menuItems: Menu[] = MENUITEMS;

  @Output()
  onLoaded = new EventEmitter(true);

  ngAfterViewInit() {
    this.onLoaded.emit();
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Дашборд', type: 'link', icon: 'dashboard' },
  { state: 'tasks', name: 'Задачи', type: 'link', icon: 'date_range' },
  { state: 'debts', name: 'Задолженности', type: 'link', icon: 'whatshot' },
  { state: 'agreements', name: 'Договоры', type: 'link', icon: 'work' }
]; 
