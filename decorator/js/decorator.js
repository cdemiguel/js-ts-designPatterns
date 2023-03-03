// principal class - component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// decorator class
class ProductDecorator {
  constructor(ProductComponent) {
    this.ProductComponent = ProductComponent;
  }

  getDetail() {
    return this.ProductComponent.getDetail();
  }
}

class ComercialInfoProductDecorator extends ProductDecorator {
  constructor(ProductComponent, tradename, brand) {
    super(ProductComponent);
    this.tradename = tradename;
    this.brand = brand;
  
  }

  getDetail() {
    return `${super.getDetail()} ${this.tradename} ${this.brand} - Comercial info`;
  }
}

class  StoreProductDecorator extends ProductDecorator {
  constructor(ProductComponent, prize) {
    super(ProductComponent);
    this.prize = prize;
  }

  getDetail() {
    return `${super.getDetail()} ${this.prize} - Store info`;
  }
}

class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<h1>InfoProduct</h1><p>${super.getDetail()}</p>`;
  }
}

// Execution
const product = new ProductComponent("Cerveza");
console.log(product.getDetail());

// decorator 1
const productWithComercialInfo = new ComercialInfoProductDecorator(product, "Pilsen", "Corona");
console.log(productWithComercialInfo.getDetail());
// decorator 2
const productWithStoreInfo = new StoreProductDecorator(product, 100);
console.log(productWithStoreInfo.getDetail());

// decorator 2 with decorator 1
const productWithStoreInfoAndComercialInfo = new StoreProductDecorator(productWithComercialInfo, 100);
console.log(productWithStoreInfoAndComercialInfo.getDetail());

// decorator 3 with decorator 2 with decorator 1
const productWithHTMLInfo = new HTMLProductDecorator(productWithStoreInfoAndComercialInfo);
console.log(productWithHTMLInfo.getDetail());

myDiv.innerHTML = productWithHTMLInfo.getDetail();