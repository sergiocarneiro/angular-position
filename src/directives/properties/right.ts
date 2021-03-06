import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[right]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class RightPositionDirective
{
    /**
     * The distance from right.
     */
    @Input() right: string;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;    
    }

    ngOnInit() {
        this.element.style.right = this.right;
    }
}