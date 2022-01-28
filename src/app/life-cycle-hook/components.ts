import { Component, OnInit } from '@angular/core';
import { MixinLifeCycleHooks } from './base';

@Component({
  selector: 'com1',
  template: ``
})

export class Com1 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'com2',
  template: ``
})
export class Com2 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comStart',
  template: ``
})
export class ______ComStart_____ extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comEnd',
  template: ``
})
export class ______ComEnd________ extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}
@Component({
  selector: 'root2',
  template: ``
})
export class Root2 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}
@Component({
  selector: 'com4',
  template: ``
})
export class Com4 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}
@Component({
  selector: 'child',
  template: ``
})
export class Child extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'child1',
  template: `<grandChild1></grandChild1>`
})
export class Child1 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'child2',
  template: ``
})
export class Child2 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'grandChild1',
  template: ``
})
export class GrandChild1 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comWithChild',
  template: `<child></child>`
})
export class ComWithChild extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comWithChild1AndGrandChild1',
  template: `<child1></child1>`
})
export class ComWithChild1AndGrandChild1 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comWithContentAndChild2',
  template: `<div><ng-content></ng-content><div> <child2></child2>`
})
export class ComWithContentAndChild2 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comWithContent',
  template: `<div><ng-content></ng-content><div> `
})
export class ComWithContent extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}

@Component({
  selector: 'comWithContent2',
  template: `<div><ng-content></ng-content><div>`
})

export class ComWithContent2 extends MixinLifeCycleHooks implements OnInit {
  constructor() { super()}
}
