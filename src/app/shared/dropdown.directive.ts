import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from "@angular/core";
import { element } from "protractor";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}