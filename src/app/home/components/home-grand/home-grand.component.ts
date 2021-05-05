import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable, Injector, Input, OnInit } from '@angular/core';
import { HomeService } from '../services';

@Injectable()
class Product{
constructor(private name: String){}

}

export interface user{
  userId: number;
  name: string;

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
  styleUrls: ['./home-grand.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeGrandComponent implements OnInit {
  obj={
    productId:2,productName:'xx', model:'s',type:'q'
  };

  @Input() users: user[]=[];

  constructor(private service: HomeService, private cd: ChangeDetectorRef) { }

  

  ngOnInit() {
    this.service.getUsers().subscribe(tabs => {this.users=tabs;
    this.cd.markForCheck()});
  console.log("for thrid test git");

  };


}
