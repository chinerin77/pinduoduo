import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderService } from '../../services/order.service';
import { ProductVariant } from '../domain';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  @Input() selectedIndex = 0;

 variant$ : Observable<ProductVariant[]>;

  constructor(private router: ActivatedRoute, private service: OrderService) { 

  }

  ngOnInit() {

    const productId$ = this.router.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );
  
  this.variant$ = productId$.pipe(map(Id=>this.service.getProductionByProductId(Id)));




  }





}
