

//Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {
    static ultimoId = 0;

    
    //Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
    constructor() {
        this.products = []
    }
    //Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    addProducts(title, description, price, thumbnail, code, stock) {

        //Validar que no se repita el campo “code” y que todos los campos sean obligatorios
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Error. Debes completar todos los campos")
            return;
        }
        if(this.products.some(item => item.code === code)){
            console.log("Ya existe ese codigo!")
            return;
        }
        
        //Cada producto que gestione debe contar con las propiedades: title (nombre del producto), description (descripción del producto), price (precio), thumbnail (ruta de imagen), code (código identificador), stock (número de piezas disponibles)
        const newProduct = {
            //Al agregarlo, debe crearse con un id autoincrementable
            id: ++ProductManager.ultimoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)
    }
    //Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
    getProduct() {
        return this.products;
    }

    //Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    getProductById(id) {
        const product = this.products.find(item => item.id === id);
        //En caso de no coincidir ningún id, mostrar en consola un error “Not found”
        if(!product) {
            console.log("Not found")
        } else {
            console.log("Producto encontrado", product)
        }
    }
}

//
//Proceso de testing de este entregable
//

const manager = new ProductManager();

console.log(manager.getProduct());


//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE(solucion linea 28)

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
manager.addProducts("Producto prueba", "Este es un producto prueba", 200 ,"sin imagen", "abc123", 25);
manager.addProducts("Jugo", "sabor manzana", 150 ,"sin imagen", "abc321", 3);

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.(solucion linea 20)
manager.addProducts("Producto prueba", "Este es un producto prueba", 200 ,"sin imagen", "abc123", 25);

console.log(manager.getProduct())

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
manager.getProductById(1)
manager.getProductById(123)
