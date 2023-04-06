import { Component, ElementRef, HostBinding, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonicModule, ScrollDetail } from '@ionic/angular';
import { ScrollLineComponent } from '../scroll-line/scroll-line.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ScrollLineComponent],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  lineHeight: number = 500;
  lineInitialPosition: number = (document.documentElement.clientHeight / 2) + 150;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Daniel Barroso')
  }

}
