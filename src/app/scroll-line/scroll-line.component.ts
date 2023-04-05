import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule, ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'scroll-line',
  templateUrl: './scroll-line.component.html',
  styleUrls: ['./scroll-line.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ScrollLineComponent {

  @ViewChild('svgLine') input: ElementRef<HTMLInputElement> | undefined;
  height = 0;
  constructor() { }

  length = 300
  dasharray = this.length
  dashoffset = this.length

  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.style.height = this.height.toString()
      console.log(this.height)
    }
  }

  onScroll(ev: CustomEvent<ScrollDetail>) {

    console.log(this.height)
    console.log(ev.detail.currentY)
    if (this.input) {
      if (ev.detail.currentY > 500) {
        this.height = ev.detail.currentY - 500
        this.input.nativeElement.style.height = this.height + "px"
        this.input.nativeElement.style.display = "block"
        console.log(this.input.nativeElement.style.height)
      } else if (ev.detail.currentY < 500) {
        this.height = 0
        this.input.nativeElement.style.display = "none"
      }
    }
  }

}
