/*
 Is there a way to write a customElement without a view... Similar to AngularJS's transclude?
 
 <ai-card>
    
    <div></div>
    <other-stuff></other-stuff>
 
 </ai-card>
 
 
 
 */
 
 
 import {Behavior} from <span class="string">'aurelia-templating'</span>;

export <span class="keyword">class</span> SayHello {
  static metadata(){
    <span class="keyword">return</span> Behavior
      .customElement(<span class="string">'say-hello'</span>)
      .withProperty(<span class="string">'to'</span>);
      .noView()
      .skipProcessingContent();
  }

  speak(){
    alert(<span class="string">'Hello ${this.to}!'</span>);
  }
}
