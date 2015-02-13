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