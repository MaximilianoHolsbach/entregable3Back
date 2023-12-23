const fs = require("fs");

const { promisify } = require("util"); // Convierte funciones basadas en callbacks en funciones que devuelven promesas

// Utilizamos estos modulos promisify(fs.readFile), promisify(fs.writeFile); para cambiar de funciones asincronas a funciones que devuelven promesas
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

class ProductManager {
  constructor(ruta) {
    this.products = [];
    this.ruta = ruta;
    this.init(); // Metodo para inicializar la clase dependiendo de la existencia del archivo
  }
  init() {
    const file = fs.existsSync(this.ruta); // Con el modulo comprobamos la existencia del archivo
    if (file) {
      this.products = JSON.parse(fs.readFileSync(this.ruta, "utf-8")); // Asigno el contenido del archivo al array de objetos
    } else {
      fs.writeFileSync(this.ruta, JSON.stringify(this.products, null, 2)); // Creo un archivo con un array vacio
    }
  }
  async create(data) {
    try {
      if (!(data.title || data.photo || data.price || data.stock)) {
        // Comprobamos la carga de los campos obligatorios
        throw new Error("Todos los campos deben ser cargados");
      }
      const product = {
        // Creamos el Usuario
        id:
          this.products.length === 0
            ? 1
            : this.products[this.products.length - 1].id + 1,
        title: data.title,
        photo: data.photo,
        price: data.price,
        stock: data.stock,
      };
      this.products.push(product); // Pusheamos al producto en el array
      const productsFile = JSON.stringify(this.products, null, 2); // Pasamos a texto plano el array actualizado
      await writeFileAsync(this.ruta, productsFile, "utf-8"); // Actualizamos el contenido del archivo
    } catch (error) {
      return error.message;
    }
  }

  read() {
    try {
      if (this.products.length === 0) {
        throw new Error("No existen usuarios cargados");
      } else {
        return this.products;
      }
    } catch (error) {
      return error.message;
    }
  }

  readOne(id) {
    const productById = this.products.find(
      (product) => product.id === Number(id)
    ); // Utilizamos el metodo .find para iterar el array y comparar el valor de la clave id con la ingresada
    try {
      if (!productById) {
        throw new Error("El id ingresado no corresponde a ningún producto");
      } else {
        return productById;
      }
    } catch (error) {
      return error.message;
    }
  }
}

const producto = new ProductManager("data/productManager.json");
/*
producto.create({
  title: "TONER MP301",
  photo:
    "https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-users-icon-png-image_856952.jpg",
  price: 10,
  stock: 50,
});
producto.create({
  title: "TONER MP402",
  photo:
    "https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-users-icon-png-image_856952.jpg",
  price: 30,
  stock: 50,
});
producto.create({
  title: "TONER MP501",
  photo:
    "https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-users-icon-png-image_856952.jpg",
  price: 50,
  stock: 50,
});
producto.create({
  title: "TONER MP305",
  photo:
    "https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-users-icon-png-image_856952.jpg",
  price: 70,
  stock: 50,
});
*/
console.log(producto.read());

console.log(producto.readOne(3));
