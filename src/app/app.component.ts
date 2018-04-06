import { Component } from '@angular/core';
import { ProductServices } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `,
    providers: [ ProductServices ]
})
export class AppComponent{
  pageTitle: String = 'Product Management';
}
