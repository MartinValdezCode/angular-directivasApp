import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es obligatorio';
  private _valido: boolean = false; 
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  };

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  } 
  @Input() set valido(valor: boolean) {
    this._valido = valor;
    this.setHidden();
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.htmlElement = this.el;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.setClase();
    this.setColor();
    this.setMensaje();
  }

  setClase(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setHidden(): void {
    this.htmlElement.nativeElement.hidden = !this._valido;
  }
}
