//=====================================//
export class Esc {
  static metadata(){
    return Behavior
      .attachedBehavior('esc').withProperty('value', 'valueChanged', 'esc');
  }

  static inject() { return [Element]; }

  constructor(Element) {
    this.element = Element;
  }

  bind() {
    this.element.addEventListener('keyup', (event) => {
      if(event.keyCode === 27) {
        this.value();
      }
    });
  }
}

/*
but to use it in your HTML markup you'd need to bind instead delegate the method:
<input type="text" esc.bind="someMethod" />
Also note without () because you just want to pass the reference, the call happens via the AttachedBehavior
*/
//=====================================//


//=====================================//
/*
Another implementation
*/

import {Behavior} from 'aurelia-framework';
export class DatasomeThing {
  static metadata() {
    return Behavior
      .attachedBehavior('data-some-thing')
      .withProperty('dataSomeThing', 'dataSomeThingChanged', 'data-some-thing');
  }

  static inject() {
    return [Element];
  }

  constructor(element) {
    this.element = element;

  }

  dataSomeThingChanged(newValue) {
    console.log(newValue)
  }
}

/* 
in HTML
    <div data-some-thing.two-way="firstName"></div>

    if you want the binding to be two way by default
    .withProperty('dataSomeThing', 'dataSomeThingChanged', 'data-some-thing').and(x => x.bindingIsTwoWay());
    then in html you just use
    <div data-some-thing.bind="firstName"></div>

*/
//=====================================//