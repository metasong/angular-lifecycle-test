import { Component, Input, OnInit } from '@angular/core';
import { MixinLifeCycleHooks } from '../base';

@Component({
  selector: 'root',
  templateUrl: './life-cycle-hook-host.component.html',
  styleUrls: ['./life-cycle-hook-host.component.scss']
})
export class Root extends MixinLifeCycleHooks {
  constructor() { super()}
}
