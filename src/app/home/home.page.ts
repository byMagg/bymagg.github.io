import { Component, ViewEncapsulation } from '@angular/core';
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
  constructor() { }
}
