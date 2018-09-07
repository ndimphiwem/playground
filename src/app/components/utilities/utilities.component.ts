import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {

  textAlignment = `
<p class="u-has-text--left">Left aligned text on all viewport sizes.</p>
<p class="u-has-text--centered">Center aligned text on all viewport sizes.</p>
<p class="u-has-text--right">Right aligned text on all viewport sizes.</p>`;
  textTransform = `
<p class="u-is--lowercase">Lowercased Text.</p>
<p class="u-is--uppercase">uppercased text.</p>
<p class="u-is--capitalised">capitalized text.</p>
<p class="u-is--italic">italic text.</p>`;
  fontWeight = `
<p class="u-has-font--bold">Bold text.</p>
<p class="u-has-font--normal">Normal weight text.</p>
<p class="u-has-font--light">Light weight text.</p>
<p class="u-has-font--bolder">Very bold text.</p>
<p class="u-is--italic">Italic text.</p>`;
  uniformPadding = `
<div class="u-padding--btm-sm">
  <div class="u-bg-dealer u-display--inline-block u-padding--none u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans">.u-padding--none</div>
  </div>
  <div class="u-bg-dealer u-display--inline-block u-padding--sm u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans">.u-padding--sm</div>
  </div>
  <div class="u-bg-dealer u-display--inline-block u-padding--md u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans">.u-padding--md</div>
  </div>
  <div class="u-bg-dealer u-display--inline-block u-padding--lg u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans">.u-padding--lg</div>
  </div>
  <div class="u-bg-dealer u-display--inline-block u-padding--xlg u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans">.u-padding--xlg</div>
  </div>
</div>`;
uniformMargins = `
<div class="u-margin--btm-sm">
  <h3>Uniform margins</h3>
  <div class="u-bg-poker u-display--inline-block u-margin--rgt-sm">
      <div class="u-display--inline-block u-bg-wtrans u-margin--none">.u-margin--none</div>
  </div>
  <div class="u-bg-poker u-display--inline-block u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans u-margin--sm">.u-margin--sm</div>
  </div>
  <div class="u-bg-poker u-display--inline-block u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans u-margin--md">.u-margin--md</div>
  </div>
  <div class="u-bg-poker u-display--inline-block u-margin--rgt-sm">
    <div class="u-display--inline-block u-bg-wtrans u-margin--lg">.u-margin--lg</div>
  </div>
</div>`;
textAndLinks = `
<p class="u-text-primary">.u-text-primary</p>
<p class="u-text-secondary">.u-text-secondary</p>
<p class="u-text-success">.u-text-success</p>
<p class="u-text-danger">.u-text-danger</p>
<p class="u-text-warning">.u-text-warning</p>
<p class="u-text-info">.u-text-info</p>
<p><a href="#" class="c-btn__link u-text-primary">Primary link</a></p>
<p><a href="#" class="c-btn__link u-text-secondary">Secondary link</a></p>
<p><a href="#" class="c-btn__link u-text-success">Success link</a></p>
<p><a href="#" class="c-btn__link u-text-danger">Danger link</a></p>
<p><a href="#" class="c-btn__link u-text-warning">Warning link</a></p>
<p><a href="#" class="c-btn__link u-text-info">Info link</a></p>`;
backgrounds = `
<div class="u-bg-primary u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-primary--darken">.u-bg-primary .u-text-primary--darken</div>
</div>
<div class="u-bg-secondary u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-secondary--darken">.u-bg-secondary .u-text-secondary--darken</div>
</div>
<div class="u-bg-vegas u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-vegas--darken">.u-bg-vegas .u-text-vegas--darken</div>
</div>
<div class="u-bg-poker u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-poker--darken">.u-bg-poker .u-text-poker--darken</div>
</div>
<div class="u-bg-bingo u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-bingo--darken">.u-bg-bingo .u-text-bingo--darken</div>
</div>
<div class="u-bg-plus u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-plus--darken">.u-bg-plus .u-text-plus--darken</div>
</div>
<div class="u-bg-vip u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-vip--darken">.u-bg-vip .u-text-vip--darken</div>
</div>
<div class="u-bg-esport u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-esport--darken">.u-bg-esport .u-text-esport--darken</div>
</div>
<div class="u-bg-virtuals u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-virtuals--darken">.u-bg-virtuals .u-text-virtuals--darken</div>
</div>
<div class="u-bg-primary u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-betting--darken">.u-bg-betting .u-text-betting--darken</div>
</div>
<div class="u-bg-insider u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-insider--darken">.u-bg-insider .u-text-insider--darken</div>
</div>
<div class="u-bg-dealer u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-dealer--darken">.u-bg-dealer .u-text-dealer--darken</div>
</div>
<div class="u-bg-betgames u-content--left u-margin--btm-sm u-padding--sm">
    <div class="u-text-betgames--darken">.u-bg-betgames .u-text-betgames--darken</div>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
