/*  Passing e to event */
<input type="submit" submit.delegate="myMethod($event)">

/* installing event emitter via jspm	*/
jspm install npm:eventemitter

//================================//
/* using bind with helpers */
//================================//
//HTML
src.bind="getValue(obj.prodimg_img)"
//view model
getValue (img) {
  return img._value || img;
}
//================================//

//================================//
/*
REPEAT.FOR FEATURES
	calling a parent function from within repeat.for needs a $parent. prefix
*/
//================================//

//================================//
/*
	dynamically adding navigation
	src: https://github.com/cmichaelgraham/aurelia-typescript/blob/master/skel-nav-require-vs-ts/skel-nav-require-vs-ts/views/welcome.ts#L25-L28
*/
this.theRouter.addRoute({ route: "dyno-view", moduleId: "views/dyno-view", nav: true, title: "dyno-view" });
this.theRouter.refreshNavigation();

//================================//