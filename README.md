# entregable3Back
Servidor web con express

# Manejo de Archivos - Desarrollo de Servidor Express

## Consigna

El objetivo es estructurar correctamente el servidor y desarrollar un servidor basado en Express que permita realizar consultas a archivos de productos y usuarios. Se deben implementar los siguientes métodos en cada manager de memoria (`memory`) y sistema de archivos (`fs`):

### Métodos para Manager de Memory y FS

- `create(data)`: Agrega un producto/usuario, generando el ID con crypto (12 caracteres hexadecimales).
- `read()`: Devuelve un arreglo con todos los productos/usuarios.
- `readOne(id)`: Devuelve el objeto producto/usuario correspondiente al ID.
- `destroy(id)`: Elimina el producto/usuario de la lista.

### Endpoints de Productos

- `GET /api/products`: Implementa el método `read()` de FS.
  - Si el array tiene productos, enviar al cliente un objeto con las propiedades:
    - `success: true`
    - `response: (el array)`
  - Si el array está vacío, manejar el error 404 y enviar al cliente un objeto con las propiedades:
    - `success: false`
    - `message: “not found!”`

- `GET /api/products/:pid`: Implementa el método `readOne(id)` de FS.
  - Si el producto existe, enviar al cliente un objeto con las propiedades:
    - `success: true`
    - `response: (el objeto)`
  - Si el objeto no existe, manejar el error 404 y devolver un objeto con las propiedades:
    - `success: false`
    - `message: “not found!”`

### Endpoints de Usuarios

- `GET /api/users`: Implementa el método `read()` de FS.
  - Si el array tiene usuarios, enviar al cliente un objeto con las propiedades:
    - `success: true`
    - `response: (el array)`
  - Si el array está vacío, manejar el error 404 y enviar al cliente un objeto con las propiedades:
    - `success: false`
    - `message: “not found!”`

- `GET /api/users/:uid`: Implementa el método `readOne(id)` de FS.
  - Si el usuario existe, enviar al cliente un objeto con las propiedades:
    - `success: true`
    - `response: (el objeto)`
  - Si el objeto no existe, manejar el error 404 y devolver un objeto con las propiedades:
    - `success: false`
    - `message: “not found!”`

## Formato del Entregable

- **Pull Request (PR):** Crear una PR desde la rama `sprint3` hacia `main/master` según corresponda.
- **Pruebas de Endpoints:** Realizar pruebas en los endpoints y capturas de pantalla para incluir en la PR.
- **Readme.md:** Incluir un readme explicando lo que se entregó.

La entrega es individual. En caso de trabajar en parejas, informar al tutor con quién trabajaron (ambos deben avisar).

---

*Nota: Este es un documento de transcripción y no se ejecuta como código. Asegúrate de seguir las instrucciones y realizar las implementaciones necesarias en tu código.*