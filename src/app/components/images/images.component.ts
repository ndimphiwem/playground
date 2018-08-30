import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  fixedOne = `
<div class="col-md-2">u-image u-image__is--16by16</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--16by16">
</div>
<div class="col">16px * 16px</div>`;
  fixedTwo = `
<div class="col-md-2">u-image u-image__is--24by24</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--24by24">
</div>
<div class="col">24px * 24px</div>`;
  fixedThree = `
<div class="col-md-2">u-image u-image__is--32by32</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--32by32">
</div>
<div class="col">32px * 32px</div>`;
  fixedFour = `
<div class="col-md-2">u-image u-image__is--48by48</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--48by48">
</div>
<div class="col">48px * 48px</div>`;
  fixedFive = `
<div class="col-md-2">u-image u-image__is--64by64</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--64by64">
</div>
<div class="col">64px * 64px</div>`;
  fixedSix = `
<div class="col-md-2">u-image u-image__is--96by96</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--96by96">
</div>
<div class="col">96px * 96px</div>`;
  fixedSeven = `
<div class="col-md-2">u-image u-image__is--128by128</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--128by128">
</div>
<div class="col">128px * 128px</div>`;
  fixedEight = `
<div class="col-md-2">u-image u-image__is--256by256</div>
<div class="col-md-2">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--256by256">
</div>
<div class="col">256px * 256px</div>`;
  responsive = `
<img src="https://via.placeholder.com/1151x250" class="" alt="">`;
  aligning = `
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image__is--left u-image__is--256by256">
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image__is--right u-image__is--256by256">`;
  rounded = `
<img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="u-image u-image__is--rounded" alt="float-left"/>`;
  constructor() { }

  ngOnInit() {
  }

}
