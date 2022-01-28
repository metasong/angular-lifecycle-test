import { Component, OnInit } from '@angular/core';
import { MixinLifeCycleHooks } from './base';

@Component({
  selector: 'com1',
  template: ``
})

export class Com1Component extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}

}
