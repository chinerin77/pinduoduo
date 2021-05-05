export interface tabItem{
    title:string;
    icon:string;
    link:string;
    selectedIcon:string

}

export interface Ad{
    imageUrl: string, 
    link?: string
    tab:string
}

export interface Product{
    imageLink:string,
    title:string,
    tags:string[],
    price:number,
    id:number,
    typeId:number
}
