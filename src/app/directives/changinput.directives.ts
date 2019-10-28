import { Directive,Input,HostListener,Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector:'[changeBorder]'
})

export class change{
     @Input('changeBorder') color:string;
    constructor(private el: ElementRef, private render: Renderer2){}
    @HostListener('keypress')
    onKeypressing(){
       this.render.setStyle(this.el.nativeElement,"borderColor","green")
    }
}