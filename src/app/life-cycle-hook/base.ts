import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

type Constructor<T> = new (...args:any[])=>T
export function mixinLifeCycleHooks<T extends Constructor<{}>>(dir: T) {
  return class extends dir implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
    private name = `===> ${this.constructor.name}`;
    ngOnChanges(changes: SimpleChanges): void {
      console.warn(`${this.name}: ngOnChanges`);
    }
    ngOnDestroy(): void {
      console.warn(`${this.name}: ngOnDestroy`);
    }
    ngDoCheck(): void {
      console.warn(`${this.name}: ngDoCheck`);
    }
    ngAfterContentInit(): void {
      console.warn(`${this.name}: ngAfterContentInit`);
    }
    ngAfterContentChecked(): void {
      console.warn(`${this.name}: ngAfterContentChecked`);
    }
    ngAfterViewInit(): void {
      console.warn(`${this.name}: ngAfterViewInit`);
    }
    ngAfterViewChecked(): void {
      console.warn(`${this.name}: ngAfterViewChecked`);
    }
    ngOnInit() {
     console.warn(`${this.name}: onInit`);
    }


  }
}

export const  MixinLifeCycleHooks = mixinLifeCycleHooks(Object);
