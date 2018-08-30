import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  headers = `
<h1>h1. All their equipment and instruments are alive.</h1>
<h2>h2. A red flair silhouetted the jagged edge of a wing.</h2>
<h3>h3. I watched the storm, so beautiful yet terrific.</h3>
<h4>h4. Almost before we knew it, we had left the ground.</h4>
<h5>h5. A shining crescent far beneath the flying vessel.</h5>
<h6>h6. She stared through the window at the stars.</h6>`;
  paragraph = `
<p class="u-content--center u-has-text--justified">
  Vivamus facilisis justo sit amet ligula ornare, nec tempus ante tincidunt. Pellentesque id quam eleifend, molestie velit
  in, porta tellus. Ut erat tellus, efficitur eget sem nec, sagittis semper felis. Nullam suscipit suscipit justo eget
  pretium. In mi erat, dictum non suscipit et, malesuada quis lorem. Aliquam molestie ac arcu porttitor sollicitudin.
  Phasellus dignissim ut velit non mattis. Sed posuere ligula ut augue mollis, ut sodales est aliquam. Fusce nec augue
  et velit dapibus tincidunt nec ac quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
  cubilia Curae; Sed feugiat nibh in purus aliquam, in fringilla justo venenatis. Nulla velit erat, imperdiet sed risus
  in, mattis aliquam mi. Etiam sed nunc ornare, congue libero ut, pellentesque libero.
</p>`;
  paragraphRight = `
<p class="u-has-text--right">
  Vivamus facilisis justo sit amet ligula ornare, nec tempus ante tincidunt. Pellentesque id quam eleifend, molestie velit
  in, porta tellus. Ut erat tellus, efficitur eget sem nec, sagittis semper felis. Nullam suscipit suscipit justo eget
  pretium. In mi erat, dictum non suscipit et, malesuada quis lorem. Aliquam molestie ac arcu porttitor sollicitudin.
  Phasellus dignissim ut velit non mattis. Sed posuere ligula ut augue mollis, ut sodales est aliquam. Fusce nec augue
  et velit dapibus tincidunt nec ac quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
  cubilia Curae; Sed feugiat nibh in purus aliquam, in fringilla justo venenatis. Nulla velit erat, imperdiet sed risus
  in, mattis aliquam mi. Etiam sed nunc ornare, congue libero ut, pellentesque libero.
</p>`;
  lists = `
<div class="col-4">
    <ol>
      <li>Pumpkin Spice Latte</li>
      <li>Green Tea Latte</li>
      <li>Youthberry Tea</li>
      <li>Citrus Mint Green Tea Latte</li>
      <li>Pumpkin Spice Frappuccino</li>
      <li>Jasmine Pearls</li>
      <li>Berry Smoothie</li>
    </ol>
  </div>
  <div class="col-4">
    <ul>
      <li>Pumpkin Spice Latte</li>
      <li>Green Tea Latte</li>
      <li>Youthberry Tea</li>
      <li>Citrus Mint Green Tea Latte</li>
      <li>Pumpkin Spice Frappuccino</li>
      <li>Jasmine Pearls</li>
      <li>Berry Smoothie</li>
    </ul>
  </div>
  <div class="col-4">
    <ol class="u-list__no-type">
      <li>Pumpkin Spice Latte</li>
      <li>Green Tea Latte</li>
      <li>Youthberry Tea</li>
      <li>Citrus Mint Green Tea Latte</li>
      <li>Pumpkin Spice Frappuccino</li>
      <li>Jasmine Pearls</li>
      <li>Berry Smoothie</li>
    </ol>
  </div>`;
  labels = `
<ul class="u-list u-list--inline">
  <li class="col-4">
    <span class="c-label">Default</span>
  </li>
  <li class="col-4">
    <span class="c-label c-label__primary">Primary</span>
  </li>
  <li class="col-4">
    <span class="c-label c-label__success">Success</span>
  </li>
  <li class="col-4">
    <span class="c-label c-label__warning">Warning</span>
  </li>
  <li class="col-4">
    <span class="c-label c-label__danger">Danger</span>
  </li>
  </ul>`;
  constructor() { }

  ngOnInit() {
  }

}
