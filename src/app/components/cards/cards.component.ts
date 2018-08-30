import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardOne = `
<div class="col-3">
  <div class="c-card">
    <div class="c-card__content">
      <p class="c-card__content--subtitle">
        Betslip is currently empty
      </p>
    </div>
    <footer class="c-card__footer">
        <div class="row no-gutters">
          <div class="col">
            <a class="c-btn c-btn__success c-btn--full c-btn--large" href="#">Single Bets</a>
          </div>
          <div class="col">
            <a class="c-btn c-btn__warning--outline c-btn--full c-btn--large" href="#">Multi Bets</a>
          </div>
        </div>
    </footer>
  </div>
</div>`;
  cardTwo = `
<div class="col-3">
  <div class="c-card">
    <header class="c-card__header">
      <p class="c-card__header--title">
        Betslip
      </p>
    </header>
    <div class="c-card__content">
      <p class="c-card__content--title">
        Betslip is currently empty
      </p>
      <p class="c-card__content--subtitle">
        Betslip is currently empty
      </p>
    </div>
    <footer class="c-card__footer">
        <div class="row no-gutters">
          <div class="col">
            <a class="c-btn c-btn__success c-btn--full c-btn--large" href="#">Single Bets</a>
          </div>
          <div class="col">
            <a class="c-btn c-btn__warning--outline c-btn--full c-btn--large" href="#">Multi Bets</a>
          </div>
        </div>
    </footer>
  </div>
</div>`;
  cardThree = `
<div class="col-3">
  <div class="c-card">
    <header class="c-card__header bg-primary">
      <p class="c-card__header--title">
        Betslip
      </p>
    </header>
    <div class="c-card__content">
      <p class="c-card__content--title">
        Betslip is currently empty
      </p>
      <p class="c-card__content--subtitle">
        Betslip is currently empty
      </p>
    </div>
    <footer class="c-card__footer">
        <div class="row no-gutters">
          <div class="col">
            <a class="c-btn c-btn__success c-btn--full c-btn--large" href="#">Single Bets</a>
          </div>
          <div class="col">
            <a class="c-btn c-btn__warning--outline c-btn--full c-btn--large" href="#">Multi Bets</a>
          </div>
        </div>
    </footer>
  </div>
</div>`;
  cardFour = `
<div class="col-3">
    <div class="c-card">
      <div class="c-card__image">
        <img src="https://placeimg.com/480/240/tech" alt="Placeholder image">
      </div>
      <div class="c-card__content">
        <p class="c-card__content--title">
          Betslip is currently empty
        </p>
        <p class="c-card__content--subtitle">
          Betslip is currently empty
        </p>
      </div>
      <footer class="c-card__footer">
        <div class="row no-gutters">
          <div class="col">
            <a class="c-btn c-btn__success c-btn--full c-btn--large" href="#">Single Bets</a>
          </div>
          <div class="col">
            <a class="c-btn c-btn__warning--outline c-btn--full c-btn--large" href="#">Multi Bets</a>
          </div>
        </div>
      </footer>
    </div>
  </div>  `;
  constructor() { }

  ngOnInit() {
  }

}
