import { ImageSlider } from "src/app/share";
import { Product } from "src/app/share/domain";

export interface ProductVariant{
id:number,
product: Product,
productionId:string,
name:string,
price:number,
listPrice:number,
productVariantImages: ImageSlider[];
}