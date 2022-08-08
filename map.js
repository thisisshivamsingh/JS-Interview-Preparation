let product = new Map();
product.set("pCode", 1001).set(1, "Apple").set(true, "Available");
// console.log(product);
// console.log(product.get(true));
// console.log(product.size);
// product["price"] = 300;

for (let v of product.values()) {
  console.log(v);
}
