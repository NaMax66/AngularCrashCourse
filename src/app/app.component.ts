import { Component } from '@angular/core';

@Component({ /*like metadata*/
  selector: 'app-root', /*point to html*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Max';

}
