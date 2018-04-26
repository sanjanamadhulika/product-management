import { Component } from '@angular/core';
import { ProductServices } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='conatiner-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']"> Home </a></li>
            <li><a [routerLink]="['/products']"> Product List </a></li>
          </ul>
         </div>
       </nav>
       <div class='container'>
          <router-outlet></router-outlet>
       </div>      
    </div>
    `,
    providers: [ ProductServices ]
})
export class AppComponent{
  pageTitle: String = 'Product Management';
}
