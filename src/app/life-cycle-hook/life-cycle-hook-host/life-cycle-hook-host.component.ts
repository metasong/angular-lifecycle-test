import { Component, Input, OnInit } from '@angular/core';
import { MixinLifeCycleHooks } from '../base';

@Component({
  selector: 'app-life-cycle-hook-host',
  templateUrl: './life-cycle-hook-host.component.html',
  styleUrls: ['./life-cycle-hook-host.component.scss']
})
export class LifeCycleHookHostComponent extends MixinLifeCycleHooks {

  constructor() { super()}

  @Input() ddd =1;

}
