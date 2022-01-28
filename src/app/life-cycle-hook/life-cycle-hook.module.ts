import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHookHostComponent } from './life-cycle-hook-host/life-cycle-hook-host.component';
import { Dir1Directive } from './directives';
import { Com1Component } from './components';



@NgModule({
  declarations: [LifeCycleHookHostComponent,
    Dir1Directive,
    Com1Component,
  ],
  imports: [
    CommonModule
  ],
  exports:[LifeCycleHookHostComponent]
})
export class LifeCycleHookModule { }
