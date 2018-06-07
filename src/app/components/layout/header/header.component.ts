import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements AfterViewInit {
  badgeCount = 4;

  @Output()
  onLoaded = new EventEmitter(true);

  ngAfterViewInit() {
    this.onLoaded.emit();
  }
}
