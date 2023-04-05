import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Daniel Barroso')
  }
}
