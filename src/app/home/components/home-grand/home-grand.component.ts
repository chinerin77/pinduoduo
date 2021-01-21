import { Component, Injectable, Injector, OnInit } from '@angular/core';

@Injectable()
class Product{
constructor(private name: String){}

}

class PurchaseOrder {
  private product: Product;
  private amount: number;
  constructor(){
    this.product = new Product('大米手机');
    this.amount = 2;

  }

}



@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj={
    productId:2,productName:'xx', model:'s',type:'q'
  };

  constructor() { }

  

  ngOnInit() {
    const injector =Injector.create({
      providers:[
        {
          provide: Product,
          useFactory:()=>{
            return new Product('大米')
          },
          deps: []
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps:[Product]
        }
      ]
    });
    console.log(injector)
  }

}
