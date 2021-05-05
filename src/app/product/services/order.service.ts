import { Injectable } from '@angular/core';
import { ProductVariant } from '../component/domain';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(){}
    productVariant: ProductVariant[]= [
        {
            id:1,
            productionId:'1',
            product: {
                imageLink:'/assets/avatars/avatar001.png',
                title:'bag',
                tags:['woman','fashion','brand'],
                price:70000,
                id:1,
                typeId:1
              },
            name:"规格1",
            price:100,
            listPrice:100,
            productVariantImages: [  {
                imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1379405831,3144592632&fm=15&gp=0.jpg',
                link: '',
                caption: ''
              },
          
              {
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608365596599&di=47edcbc640e22cab55c29e268ae347aa&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D01bd4094b97eca80120539efa1229712%2Facfb47ed2e738bd400b05486a88b87d6267ff940.jpg',
                link: '',
                caption: ''
              },]

        },
        {
            id:2,
            productionId:'1',
            product: {
                imageLink:'/assets/avatars/avatar001.png',
                title:'bag',
                tags:['woman','fashion','brand'],
                price:70000,
                id:1,
                typeId:1
              },
            name:"规格2",
            price:100,
            listPrice:100,
            productVariantImages: []

        },

        {
            id:2,
            productionId:'2',
            product: {
                imageLink:'/assets/avatars/avatar001.png',
                title:'bag',
                tags:['woman','fashion','brand'],
                price:70000,
                id:1,
                typeId:1
              },
            name:"规格2",
            price:100,
            listPrice:100,
            productVariantImages: [{
                imgUrl:'/assets/avatars/avatar002.png',
                link: '',
                caption: ''

            }]

        }
    ] ;


    getProductionByProductId(Id: string): ProductVariant[]{
        return this.productVariant.filter(element => {return element.productionId== Id })
    }
    
}