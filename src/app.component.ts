// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <div class="nav-wrapper">
        <a href="" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="">sass</a></li>
          <li><a href="">sass <span class="new badge">4</span></a></li>
          <li><a href="">{{title}}</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class AppComponent {
  title: string = 'edis'
}