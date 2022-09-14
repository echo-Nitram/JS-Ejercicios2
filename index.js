class Producto {

    constructor(codigo) {
        this.codigo = "#" + codigo;
        this.color = "Niguno";
        this.foto = "Niguno";
    }

    VerCodigo() {
        return this.codigo;
    }
    VerColor() {
        return this.color;
    }
    VerFoto() {
        return this.foto;
    }

}

let listaDeProductos = [];
alert("Bienvenido a su invetario de productos");
let opcion = parseInt(prompt(`Opciones:\n1- Agregar producto\n2- Mostrar productos\n3- Eliminar producto\n4- Salir`));

while (opcion != 4) {

    let cadena = "";
    for (let i = 0; i < listaDeProductos.length; i++) {
        cadena = cadena + `` + i + `-` + listaDeProductos[i].VerCodigo() + `\n`;
    }

    switch (opcion) {
        case 1:
            let codigoProducto = prompt("Porfavor ingrese el codigo del produrcto");
            let nuevoProducto = new Producto(codigoProducto);
            listaDeProductos.push(nuevoProducto);
            break;
        case 2:
            let productoEdi = prompt(`La cantidad de productos total es de: ` + listaDeProductos.length + `\n` + cadena + `\nSeleccione el producto del cual desea ver la informacion`);
            alert(`Codigo: ` + listaDeProductos[productoEdi].VerCodigo() + `\nColor: ` + listaDeProductos[productoEdi].VerColor()+ `\nFoto: ` + listaDeProductos[productoEdi].VerFoto()); 
            break;
        case 3:
            let productoEli = prompt(`Lista de productos:\n` + cadena + `\nSeleccione producto a eliminar`);
            listaDeProductos.splice(productoEli, 1);
            break;
        default:
            text = "...";
    }

    opcion = parseInt(prompt(`Opciones:\n1- Agregar producto\n2- Mostrar producto\n3- Eliminar producto\n4- Salir`));

}

