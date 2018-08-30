import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  panels = `
<div class="row">
  <div class="col-4">
    <div class="c-panel">
      <h3>Panel Default</h3>
      <p>
        Aliquam erat volutpat. Duis euismod aliquam mi at faucibus. Donec interdum pulvinar eros. Morbi vitae maximus urna, el faucibus
        leo. Vivamus vitae leo porttitor, tincidunt lectus ac, tempor lectus. Ut.
      </p>
    </div>
  </div>
  <div class="col-4">
    <div class="c-panel c-panel__primary c-panel--round">
      <h3>Panel Primary</h3>
      <p>
        Aliquam erat volutpat. Duis euismod aliquam mi at faucibus. Donec interdum pulvinar eros. Morbi vitae maximus urna, vel faucibus
        leo. Vivamus vitae leo porttitor, tincidunt lectus ac, tempor lectus. Ut.
      </p>
    </div>
  </div>
  <div class="col-4">
    <div class="c-panel c-panel__success">
      <h3>Panel Success</h3>
      <p>
        Aliquam erat volutpat. Duis euismod aliquam mi at faucibus. Donec interdum pulvinar eros. Morbi vitae maximus urna, vel faucibus
        leo. Vivamus vitae leo porttitor, tincidunt lectus ac, tempor lectus. Ut.
      </p>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-4">
    <div class="c-panel c-panel__warning">
      <h3>Panel Warning</h3>
      <p>
        Aliquam erat volutpat. Duis euismod aliquam mi at faucibus. Donec interdum pulvinar eros. Morbi vitae maximus urna, vel faucibus
        leo. Vivamus vitae leo porttitor, tincidunt lectus ac, tempor lectus. Ut.
      </p>
    </div>
  </div>
  <div class="col-4">
    <div class="c-panel c-panel__danger">
      <h3>Panel Danger</h3>
      <p>
        Aliquam erat volutpat. Duis euismod aliquam mi at faucibus. Donec interdum pulvinar eros. Morbi vitae maximus urna, vel faucibus
        leo. Vivamus vitae leo porttitor, tincidunt lectus ac, tempor lectus. Ut.
      </p>
    </div>
  </div>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
