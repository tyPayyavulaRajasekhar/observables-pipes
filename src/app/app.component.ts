import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  view = 'messages';

  onClick() {
    if (this.view == 'messages') {
      this.view = 'users';
    } else {
      this.view = 'messages';
    }
  }
}
