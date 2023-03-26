import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = "Title";
  @Output() menuclick:EventEmitter<any> = new EventEmitter<any>();
  @Output() reload:EventEmitter<any> = new EventEmitter<any>();
  onmenuclick(){
    this.menuclick.emit();
  }  
  onreload(){
    this.reload.emit();
  }
}
