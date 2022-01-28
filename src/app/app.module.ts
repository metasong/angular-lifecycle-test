import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Root2 } from './life-cycle-hook/components';
import { LifeCycleHookModule } from './life-cycle-hook/life-cycle-hook.module';

@NgModule({
  declarations: [
    AppComponent,
    Root2
    ],
  imports: [
    BrowserModule,
    LifeCycleHookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
