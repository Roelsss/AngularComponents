import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
  isHelloVisible: boolean = false;

  showHello(): void {
    this.isHelloVisible = true;
  }
}