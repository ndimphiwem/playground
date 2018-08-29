import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  /**
   * The below variables are snippets of markup for highlightjs
   */
  defaultButtons = `
<button class="c-btn c-btn__default">Default</button>
<button class="c-btn c-btn__primary">Primary</button>
<button class="c-btn c-btn__secondary">Secondary</button>
<button class="c-btn c-btn__success">Success</button>
<button class="c-btn c-btn__warning">Warning</button>
<button class="c-btn c-btn__danger">Danger</button>
<button class="c-btn c-btn__link">Link</button>`;
  defaultButtonsFull = `
<button class="c-btn c-btn__default c-btn--full">Default</button>
<button class="c-btn c-btn__primary c-btn--full">Primary</button>
<button class="c-btn c-btn__secondary c-btn--full">Secondary</button>
<button class="c-btn c-btn__success c-btn--full">Success</button>
<button class="c-btn c-btn__warning c-btn--full">Warning</button>
<button class="c-btn c-btn__danger c-btn--full">Danger</button>`;
  buttonSizing = `
<button class="c-btn c-btn__success c-btn--sm">Small</button>
<button class="c-btn c-btn__warning c-btn--md">Default</button>
<button class="c-btn c-btn__danger c-btn--lg">Large</button>`;
  buttonSizingFull = `
<button class="c-btn c-btn__success c-btn--full c-btn--lg">Large</button>
<button class="c-btn c-btn__warning c-btn--full c-btn--md">Mid</button>
<button class="c-btn c-btn__danger c-btn--full c-btn--sm">Small</button>`;
  buttonExpanded = `
<button class="c-btn c-btn__default c-btn--expanded">Expanded</button>
<button class="c-btn c-btn__success c-btn--expanded">Expanded</button>`;
  buttonFeed = `
<div class="col-12 col-sm-4">
  <button type="button" class="c-btn btn__success c-btn__feed">
    <div class="c-btn__feed--item">Team A Wins</div>
    <div class="c-btn__feed--item">Odds</div>
  </button>
</div>
<div class="col-12 col-sm-2">
  <button type="button" class="c-btn btn__success c-btn__feed">
    <div class="c-btn__feed--item">Teams Draw</div>
    <div class="c-btn__feed--item">Odds</div>
  </button>
</div>
<div class="col-12 col-sm-4">
  <button type="button" class="c-btn btn__success c-btn__feed">
    <div class="c-btn__feed--item">Team B Wins</div>
    <div class="c-btn__feed--item">Odds</div>
  </button>
</div>
<div class="col">
  <button type="button" class="c-btn btn__success c-btn__feed">
    <div class="c-btn__feed-item">Game 1</div>
    <div class="c-btn__feed-item">Odds</div>
  </button>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
