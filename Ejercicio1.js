/*LOS PRODUCTOS DE KARICHA SON LOS MEJORES... PARA TI PARA MI ... XD*/ 
producto={ /*Objeto producto*/
    code:"",
    description:"",
    type:"",
    precio_compra:"",
    precio_venta:"",
    stock:""
}
function cajita(){
    
    var productos=[ /*Arreglo con los productos de mi cajita*/
        (producto.code="01",producto.description="Principe",producto.type="Galleta",producto.precio_compra="0.25",producto.precio_venta="0.35",producto.stock="18"),
        (producto.code="02",producto.description="SnackPack",producto.type="Pudin de chocolate",producto.precio_compra="0.35",producto.precio_venta="0.60",producto.stock="24"),
        (producto.code="03",producto.description="BonBonBun",producto.type="Bombon de creza y limon",producto.precio_compra="0.10",producto.precio_venta="0.15",producto.stock="0"),
        (producto.code="04",producto.description="LaffyTaffy",producto.type="Goma de mascar, sabor a fresa y banano",producto.precio_compra="0.15",producto.precio_venta="0.25",producto.stock="12"),
        (producto.code="05",producto.description="SweetArts",producto.type="Pastillas acidas",producto.precio_compra="0.10",producto.precio_venta="0.15",producto.stock="50"),
        
    ];
    var ventas=[1,0.75,2.5,1.5,2,2,3,16,2.5,3]; /*ventas ganadas*/
    var menu=prompt("La Jefecita: Karicha "+"\n"+"Que desea hacer:"
    +"\n"+"1)Agregar Producto"+"\n"+"2)Modificar stock"+"\n"+"3)Mostrar promedio de ventas"
    +"\n"+"4)Mostrar productos con stock 0"+"\n"+"5)Salir");
    switch(menu){
        case "1":
            let cod=prompt("Codigo del producto");
            let des=prompt("Descripcion del producto");
            let tipo=prompt("Tipo de producto");
            let precioC=prompt("Precio de Compra");
            let precioV=prompt("Precio de Venta");
            let cantidad=prompt("Stock");
            producto.code=cod;
            producto.description=des;
            producto.type=tipo;
            producto.pcompra=precioC;
            producto.pventa=precioV;
            producto.stock=cantidad;
            productos.push=product;
            console.log("Producto Agregado");
            cajita();
            break;
        case "2":
            let x=prompt("Seleccione el Codigo del Producto a modificar");
            for(let i of productos){
                if(x==i.stock){
                    let nstock=prompt("Ingrese el nuevo stock");
                    producto[i].producto.cod=nstock;
                }
            }
            cajita();
            break;
        case "3":
            let cont=0;
            for(let i of ventas){
                cont+=i;
            }
            console.log("El promedio de ventas es: "+(cont/ventas.length));
            cajita();
            break;
        case "4":
            for (let i of productos){
                if(i.producto.stock==0)
                console.log(i.producto.des);
            }
            cajita();
            break;
        case "5":
            console.log("Gracias por Participar");
            break;
        default:
            cajita();
            console.log("Coloque un numero valido");
            break;
    }
}
