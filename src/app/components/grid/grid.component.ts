import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  equalWidth = `
  <div class="row">
    <div class="col">
      <div class="box">
        1 of 2
      </div>
    </div>
    <div class="col">
      <div class="box">
        2 of 2
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="box">
        1 of 3
      </div>
    </div>
    <div class="col">
      <div class="box">
        2 of 3
      </div>
    </div>
    <div class="col">
      <div class="box">
        3 of 3
      </div>
    </div>
  </div>`;
  oneColumn = `
  <div class="row">
    <div class="col">
      <div class="box">
        1 of 3
      </div>
    </div>
    <div class="col-6">
      <div class="box">
        2 of 3 (wider)
      </div>
    </div>
    <div class="col">
      <div class="box">
        3 of 3
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="box">
        1 of 3
      </div>
    </div>
    <div class="col-5">
      <div class="box">
        2 of 3 (wider)
      </div>
    </div>
    <div class="col">
      <div class="box">
        3 of 3
      </div>
    </div>
  </div>`;
  variableWidth = `
  <div class="row">
    <div class="col">
      <div class="box">
        1 of 3
      </div>
    </div>
    <div class="col-md-auto">
      <div class="box">
        Variable width content
      </div>
    </div>
    <div class="col col-lg-2">
      <div class="box">
        3 of 3
      </div>
    </div>
  </div>`;
  stackedHorizontal = `
  <div class="row">
    <div class="col-sm-8">
      <div class="box">
        col-sm-8
      </div>
    </div>
    <div class="col-sm-4">
      <div class="box">
        col-sm-4
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <div class="box">
        col-sm
      </div>
    </div>
    <div class="col-sm">
      <div class="box">
        col-sm
      </div>
    </div>
    <div class="col-sm">
      <div class="box">
        col-sm
      </div>
    </div>
  </div>`;
  mixMatch = `
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-12 col-md-8">
      <div class="box">
        .col-12 .col-md-8
      </div>
    </div>
    <div class="col-6 col-md-4">
      <div class="box">
        .col-6 .col-md-4
      </div>
    </div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">
      <div class="box">
        .col-6 .col-md-4
      </div>
    </div>
    <div class="col-6 col-md-4">
      <div class="box">
        .col-6 .col-md-4
      </div>
    </div>
    <div class="col-6 col-md-4">
      <div class="box">
        .col-6 .col-md-4
      </div>
    </div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">
      <div class="box">
        .col-6
      </div>
    </div>
    <div class="col-6">
      <div class="box">
        .col-6
      </div>
    </div>
  </div>`;
  noGutters = `
  <div class="row no-gutters">
    <div class="col-12 col-sm-6 col-md-8">
      <div class="box">
        .col-12 .col-sm-6 .col-md-8
      </div>
    </div>
    <div class="col-6 col-md-4">
      <div class="box">
        .col-6 .col-md-4
      </div>
    </div>
  </div>`;
  reorderingFirst = `
  <div class="row">
    <div class="col">
      <div class="box">
        First, but unordered
      </div>
    </div>
    <div class="col order-12">
      <div class="box">
        Second, but last
      </div>
    </div>
    <div class="col order-1">
      <div class="box">
        Third, but first
      </div>
    </div>
  </div>`;
  reorderingSecond = `
  <div class="row">
    <div class="col order-last">
      <div class="box">
        First, but last
      </div>
    </div>
    <div class="col">
      <div class="box">
        Second, but unordered
      </div>
    </div>
    <div class="col order-first">
      <div class="box">
        Third, but first
      </div>
    </div>
  </div>`;
  nesting = `
  <div class="row">
    <div class="col-sm-9">
      <div class="box">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            <div class="box box_secondary">
              Level 2: .col-8 .col-sm-6
            </div>
          </div>
          <div class="col-4 col-sm-6">
            <div class="box box_secondary">
              Level 2: .col-4 .col-sm-6
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  gameTile = `
  <div class="row u-grid-justify--center">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 game-tile p-1">
      <div class="box">
        <img src="https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg" alt="Game Tile" class="mw-100">
      </div>
    </div>
  </div>`;
  justifyLeft = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-justify--left">
          <div class="col-6">
            <div class="box box_secondary">
              Justified left
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  justifyCenter = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row  u-grid-justify--center">
          <div class="col-6">
            <div class="box box_secondary">
              Justified center
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  justifyRight = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row  u-grid-justify--right">
          <div class="col-6">
            <div class="box box_secondary">
              Justified right
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  justifyAround = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-justify--around">
          <div class="col-5">
            <div class="box box_secondary">
              Space around
            </div>
          </div>
          <div class="col-5">
            <div class="box box_secondary">
              Space around
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  justifyBetween = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-justify--between">
          <div class="col-5">
            <div class="box box_secondary">
              Space between
            </div>
          </div>
          <div class="col-5">
            <div class="box box_secondary">
              Space between
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  justifyEvenly = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-justify--evenly">
          <div class="col-5">
            <div class="box box_secondary">
              Spaced evenly
            </div>
          </div>
          <div class="col-5">
            <div class="box box_secondary">
              Spaced evenly
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  alignTop = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-align--top">
          <div class="col-5">
            <div class="box box_secondary">
              Align top
            </div>
          </div>
          <div class="col-5">
            <div class="box box_secondary">
              Align top
            </div>
            <div class="box box_secondary">
              Align top
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  alignCenter = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-align--center">
          <div class="col-5">
            <div class="box box_secondary">
              Align center
            </div>
          </div>
          <div class="col-5">
            <div class="box box_secondary">
              Align center
            </div>
            <div class="box box_secondary">
              Align center
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  alignBottom = `
  <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row u-grid-align--bottom">
          <div class="col-5">
            <div class="box box_secondary">
              Align bottom
            </div>
          </div>
          <div class="col-5">
            <div class="box box_secondary">
              Align bottom
            </div>
            <div class="box box_secondary">
              Align bottom
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  constructor() {}

  ngOnInit() {}
}
