import { Directive,Input,HostListener,Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector:'[phone]'
})

export class phonedirective{
     @Input('phone') color:string;
    constructor(private el: ElementRef, private render: Renderer2){}
    @HostListener('keypress')
    onKeypressing()
    {
        var str=this.el.nativeElement.value;
        var isnumber=/^[0-9]+$/g.test(str);
        if(str.length>9||isnumber==false)
           this.render.setProperty(this.el.nativeElement,"value","")
    }
    
}