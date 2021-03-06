import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plg-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form = `
<form>
  <div class="row">
    <div class="col-12">
      <label>Input Label</label>
      <input class="c-input c-input__has--success" type="text" placeholder="col-12" />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <label>Input Valid</label>
      <input class="c-input c-input__has--success" type="text" placeholder="col-4" />
    </div>
    <div class="col-4">
      <label>Input Warning
      </label>
      <input class="c-input c-input__has--warning" type="text" placeholder="col-4" />
    </div>
    <div class="col-4">
      <label>Input Error</label>
      <input class="c-input c-input__has--error" type="text" placeholder="col-4" />
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <label>Select option</label>
      <select class="c-input c-input__has--danger">
        <option value="sample">col-6</option>
        <option value="sample">col-6</option>
      </select>
    </div>
    <div class="col-6">
      <label>Select option</label>
      <select class="c-input c-input__has--danger">
        <option value="sample">col-6</option>
        <option value="sample">col-6</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <label>Radio buttons</label>
      <input id="radioYes" type="radio" name="radio" value="Yes">
      <label for="radioYes">Yes</label>
      <input id="radioNo" type="radio" name="radio" value="No">
      <label for="radioNo">No</label>
    </div>
    <div class="col-6">
      <label>Checkbox buttons</label>
      <input id="checkbox1" type="checkbox">
      <label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox">
      <label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row u-margin--btm-md">
    <div class="col-12">
      <label>Textarea Label</label>
      <textarea class="c-input c-input__has--warning" placeholder="col-12"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <input type="submit" class="c-btn c-btn__success" value="Submit">
      <input type="submit" class="c-btn c-btn__danger" value="Reset">
    </div>
  </div>
</form>`;
  constructor() { }

  ngOnInit() {
  }

}
