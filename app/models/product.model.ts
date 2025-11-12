export interface Product {
    id : string;
    name : string;
    price : number;
    image : string
}


export class ProductClass {
    id : string;
    name : string;
    price : number;

    constructor(id : string , name : string , price : number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayProduct() : void {
        console.log(`Product: ${this.name} (ID: ${this.id}) costs $${this.price}`);
    }
}

export default Product;