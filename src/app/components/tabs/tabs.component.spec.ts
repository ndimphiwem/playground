import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement, Component } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { Component } from '@angular/core';

// @Component({
//   selector: 'plg-comp',
//   template: '<p>Hi <ng-content></ng-content></p>',
// })
// class TestComponent {
// }

describe('[Component]: Tabs', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsComponent]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should contain unordered list class', () => {
    expect(component.ulClass).toEqual('c-tabs u-bg-secondary');
  });

  it('should render tabs and select first tab as active by default', () => {
    expect(component.selectedIndex).toEqual(1);
  });

  it('should not have more than 1 tab component', () => {
    expect(component.tabs.length).toBe(0);
  });

  it('should have more than 1 tab component', () => {
    const tabs = {
      dirty: false,
      _results: [
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Home'
        },
        {
          tabClass: 'tab-content',
          active: true,
          linkClass: 'c-tabs__link',
          title: 'Grid'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Buttons'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Typography'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Forms'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Panels'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Cards'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Images'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Utilities'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Tabs'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Accordion'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Content'
        },
        {
          tabClass: 'tab-content',
          active: false,
          linkClass: 'c-tabs__link',
          title: 'Prototype Area'
        }
      ],
      changes: {
        _isScalar: false,
        observers: [],
        closed: false,
        isStopped: false,
        hasError: false,
        thrownError: null,
        __isAsync: false
      },
      length: 13,
      last: {
        tabClass: 'tab-content',
        active: false,
        linkClass: 'c-tabs__link',
        title: 'Prototype Area'
      },
      first: {
        tabClass: 'tab-content',
        active: false,
        linkClass: 'c-tabs__link',
        title: 'Home'
      }
    };

    component.tabs = tabs as any;

    expect(component.tabs.length).toBeGreaterThan(11);
  });

  it('should render the tab title', () => {});

  it('should render the tab content', () => {});

  it('should change active tab on tab title click', () => {});

  it('should contain the class c-tabs__link--active when clicked', () => {});
});
