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
  <div class="bg-dealer u-display--inline-block u-padding--none u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans">.u-padding--none</div>
  </div>
  <div class="bg-dealer u-display--inline-block u-padding--sm u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans">.u-padding--sm</div>
  </div>
  <div class="bg-dealer u-display--inline-block u-padding--md u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans">.u-padding--md</div>
  </div>
  <div class="bg-dealer u-display--inline-block u-padding--lg u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans">.u-padding--lg</div>
  </div>
  <div class="bg-dealer u-display--inline-block u-padding--xlg u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans">.u-padding--xlg</div>
  </div>
</div>`;
uniformMargins = `
<div class="u-margin--btm-sm">
  <h3>Uniform margins</h3>
  <div class="bg-poker u-display--inline-block u-margin--rgt-sm">
      <div class="u-display--inline-block bg-wtrans u-margin--none">.u-margin--none</div>
  </div>
  <div class="bg-poker u-display--inline-block u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans u-margin--sm">.u-margin--sm</div>
  </div>
  <div class="bg-poker u-display--inline-block u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans u-margin--md">.u-margin--md</div>
  </div>
  <div class="bg-poker u-display--inline-block u-margin--rgt-sm">
    <div class="u-display--inline-block bg-wtrans u-margin--lg">.u-margin--lg</div>
  </div>
</div>`;
textAndLinks = `
<p class="text__primary">.text__primary</p>
<p class="text__secondary">.text__secondary</p>
<p class="text__success">.text__success</p>
<p class="text__danger">.text__danger</p>
<p class="text__warning">.text__warning</p>
<p class="text__info">.text__info</p>
<p><a href="#" class="c-btn__link text__primary">Primary link</a></p>
<p><a href="#" class="c-btn__link text__secondary">Secondary link</a></p>
<p><a href="#" class="c-btn__link text__success">Success link</a></p>
<p><a href="#" class="c-btn__link text__danger">Danger link</a></p>
<p><a href="#" class="c-btn__link text__warning">Warning link</a></p>
<p><a href="#" class="c-btn__link text__info">Info link</a></p>`;
backgrounds = `
<div class="bg-primary u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__primary--darken">.bg-primary .text__primary--darken</div>
</div>
<div class="bg-secondary u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__secondary--darken">.bg-secondary .text__secondary--darken</div>
</div>
<div class="bg-vegas u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__vegas--darken">.bg-vegas .text__vegas--darken</div>
</div>
<div class="bg-poker u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__poker--darken">.bg-poker .text__poker--darken</div>
</div>
<div class="bg-bingo u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__bingo--darken">.bg-bingo .text__bingo--darken</div>
</div>
<div class="bg-plus u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__plus--darken">.bg-plus .text__plus--darken</div>
</div>
<div class="bg-vip u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__vip--darken">.bg-vip .text__vip--darken</div>
</div>
<div class="bg-esport u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__esport--darken">.bg-esport .text__esport--darken</div>
</div>
<div class="bg-virtuals u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__virtuals--darken">.bg-virtuals .text__virtuals--darken</div>
</div>
<div class="bg-betting u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__betting--darken">.bg-betting .text__betting--darken</div>
</div>
<div class="bg-insider u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__insider--darken">.bg-insider .text__insider--darken</div>
</div>
<div class="bg-dealer u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__dealer--darken">.bg-dealer .text__dealer--darken</div>
</div>
<div class="bg-betgames u-content--center u-margin--btm-sm u-padding--sm">
    <div class="text__betgames--darken">.bg-betgames .text__betgames--darken</div>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
