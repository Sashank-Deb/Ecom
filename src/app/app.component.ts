import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ecommerce';
  clickMessage = 'Are Deewano Mujeh Pehechano';

  onClickMe() {
    this.clickMessage = 'Don Don Don Don Don';
}
}