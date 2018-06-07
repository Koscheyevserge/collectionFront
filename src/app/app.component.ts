import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef, Component, NgZone, OnInit, OnDestroy, ViewChild, HostListener, Directive } from '@angular/core';
import { AppHeaderComponent } from './components/layout/header/header.component';
import { AppSidebarComponent } from './components/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  headerLoaded: boolean = false;
  sidebarLoaded: boolean = false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      $(".page-wrapper").animate({ scrollTop: 0 }, 500);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  onHeaderLoaded() {
    this.headerLoaded = true;
  }

  onSidebarLoaded() {
    this.sidebarLoaded = true;
  }
}
