import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Root } from './life-cycle-hook-host/life-cycle-hook-host.component';
import { Dir1Directive } from './directives';
import { Child, Child1, Child2, Com1, Com2, ______ComStart_____, ComWithChild, ComWithChild1AndGrandChild1, ComWithContentAndChild2, ComWithContent2, GrandChild1, ComWithContent, Com4, Root2, ______ComEnd________ } from './components';



@NgModule({
  declarations: [Root,
    ______ComEnd________,
    Dir1Directive,
    Com1,
    Com2,
    ______ComStart_____,
    Com4,
    Child2,
    Child,
    ComWithChild,
    ComWithContentAndChild2,
    GrandChild1,
    ComWithContent,
    Child1,
    ComWithChild1AndGrandChild1,
    ComWithContent2,
  ],
  imports: [
    CommonModule
  ],
  exports:[Root]
})
export class LifeCycleHookModule { }
