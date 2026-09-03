const product = {
    name: 'PlayStation 4',
    price: 3000,
    describe() {
    return `${this.name} costs $${this.price}`
    }
}

console.log(product.describe())