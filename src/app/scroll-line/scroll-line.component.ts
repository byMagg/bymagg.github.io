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
  constructor() { }

  length = 300
  dasharray = this.length
  dashoffset = this.length

  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.style.strokeDasharray = this.dasharray.toString();
      this.input.nativeElement.style.strokeDashoffset = this.dashoffset.toString();
      console.log(this.dasharray)
      console.log(this.dashoffset)
    }
  }

  onScroll(ev: CustomEvent<ScrollDetail>) {
    if (this.input) {
      if (this.dashoffset > 0 && ev.detail.deltaY > 0 || this.dashoffset < this.length && ev.detail.deltaY < 0) {
        this.dashoffset -= ev.detail.deltaY / 10
      }

      if (this.dashoffset < 0) this.dashoffset = 0
      if (this.dashoffset > this.length) this.dashoffset = this.length

      this.input.nativeElement.style.strokeDashoffset = this.dashoffset.toString();
      console.log(this.input.nativeElement.style.strokeDashoffset)
    }
  }

}
