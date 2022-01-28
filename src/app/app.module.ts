import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifeCycleHookModule } from './life-cycle-hook/life-cycle-hook.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    LifeCycleHookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
