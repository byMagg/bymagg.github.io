import { Component, Input } from '@angular/core';
import { IonicModule, ScrollDetail } from '@ionic/angular';


@Component({
  selector: 'scroll-line',
  templateUrl: './scroll-line.component.html',
  styleUrls: ['./scroll-line.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ScrollLineComponent {

  @Input() maxHeight: number = 500;
  height: number = 0
  className: string = "up-relative"

  constructor() { }

  onScroll(ev: CustomEvent<ScrollDetail>) {
    console.log(ev.detail.currentY)
    const scrollInitialPosition = (document.documentElement.clientHeight / 2) + 150
    if (ev.detail.currentY > scrollInitialPosition && ev.detail.currentY < 1100) {
      console.log(document.documentElement.clientHeight / 2)
      console.log(scrollInitialPosition)
      this.height = (ev.detail.currentY - scrollInitialPosition) / this.maxHeight
      this.className = "fixed"
      console.log(this.height)
    } else if (ev.detail.currentY <= scrollInitialPosition) {
      this.height = 0
      this.className = "up-relative"
    } else {
      this.height = 1
      this.className = "down-relative"
    }
  }

}
