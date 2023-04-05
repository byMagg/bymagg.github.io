import { Component } from '@angular/core';
import { IonicModule, ScrollDetail } from '@ionic/angular';


@Component({
  selector: 'scroll-line',
  templateUrl: './scroll-line.component.html',
  styleUrls: ['./scroll-line.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ScrollLineComponent {

  height = 0;

  constructor() { }

  onScroll(ev: CustomEvent<ScrollDetail>) {
    console.log(ev.detail.currentY)
    if (ev.detail.currentY > 500) {
      this.height = ev.detail.currentY - 500
      console.log(this.height)
    } else if (ev.detail.currentY <= 500) {
      this.height = 0
    }
  }

}
