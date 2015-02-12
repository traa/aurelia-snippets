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
