export class DOM {

    constructor(element){
        if(this===undefined) return new DOM(element);

        if(typeof element === "string") {
            this.element = document.querySelectorAll(element);
        }else{
            this.element = element;
        }
    }

    static find(selector){
        if(selector instanceof HTMLElement) return new DOM(selector);
        return new DOM(document.querySelectorAll(selector));
    }

    /**
     * renders html text into DOM elements and returns the root element
     *
     * @param html
     * @returns {Node}
     */
    static create(html){
        return new DOMParser().parseFromString(html, "text/html").body.firstChild;
    }

    find(selector){
        return new DOM(document.querySelectorAll(selector));
    }

    append(child){
        if(typeof child === "string") child = DOM.create(child);
        this.element.appendChild(child);
    }
}



/* USAGE */

import {DOM as $} from 'aaike/dom'

constructor(element){
    this.element = element;
    $(this.element).append('<a><i class="fa fa-home"></i> Home</a>');
}
