import { Component, Input } from '@angular/core';

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
