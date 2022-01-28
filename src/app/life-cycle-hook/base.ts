import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

type Constructor<T> = new (...args:any[])=>T
export function mixinLifeCycleHooks<T extends Constructor<{}>>(dir: T) {
  return class extends dir implements OnInit, OnDestroy, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
    private name = `===> ${this.constructor.name}`;
    constructor(...args:any[]){
      super();
      console.log(`%c${this.name}: constructor`, 'background-color: yellow; color: green;');
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log(`%c${this.name}: ngOnChanges`, 'background-color: yellowgreen');
    }
    ngOnDestroy(): void {
      console.log(`%c${this.name}: ngOnDestroy`, 'background-color: red');
    }
    ngDoCheck(): void {
      console.log(`%c${this.name}: ngDoCheck`, 'background-color: cyan;color: blue;');
    }
    ngAfterContentInit(): void {
      console.log(`%c${this.name}: ngAfterContentInit`, 'background-color: orange');
    }
    ngAfterContentChecked(): void {
      console.log(`%c${this.name}: ngAfterContentChecked`, 'background-color: green');
    }
    ngAfterViewInit(): void {
      console.log(`%c${this.name}: ngAfterViewInit`, 'background-color: purple');
    }
    ngAfterViewChecked(): void {
      console.log(`%c${this.name}: ngAfterViewChecked`, 'background-color: hotpink; color: green');
    }
    ngOnInit() {
     console.log(`%c${this.name}: onInit`, 'background-color: blue');
    }

  }
}

export const  MixinLifeCycleHooks = mixinLifeCycleHooks(Object);
