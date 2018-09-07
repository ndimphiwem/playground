import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
// import { TabComponent } from './tab.component';
@Component({
  selector: 'plg-tab',
  template: `
  <div *ngIf="active">
    <ng-content></ng-content>
  </div>
`
})

export class TabComponent {
  @Input() title: string;
  @Input() tabClass = 'tab-content';
  @Input() disabled: boolean;
  @Input() active = false;
  @Input() linkClass = 'c-tabs__link';
  @Input() svgType: string;
  @Input() svgClass: string;
}

@Component({
  selector: 'plg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit, AfterContentInit {

  constructor() { }
  activeTabs: any[];

  @Input() vertical = false;
  @Input() ulClass = 'c-tabs u-bg-secondary';
  @Input() liClass = '';
  @Input() anchorClass = 'c-tabs__link';
  @Input() selectedIndex = 1;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;


  ngAfterContentInit() {
    if (this.tabs.length) {
      this.selectTab(this.selectedIndex);
      console.log('vejalingo', this.tabs);
    }
  }

  selectTab(index) {
    if (!this.tabs.toArray()[index].disabled) {
      this.tabs.toArray().forEach(value => value.active = false);
      this.tabs.toArray()[index].active = true;
    }
  }

  ngOnInit() {
  }
}

