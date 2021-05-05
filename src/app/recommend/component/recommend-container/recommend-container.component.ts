import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/components/services';
import { Product } from 'src/app/share/domain';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
})
export class RecommendContainerComponent implements OnInit {

  products: Product[];
  constructor(private service:HomeService) { }

  ngOnInit() {
    this.products = this.service.getProduct();
     
  }

}
