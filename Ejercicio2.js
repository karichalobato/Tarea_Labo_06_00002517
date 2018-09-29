var convertir={
    parametros:(medida,unidades,nueva_unidad,tipo_medida)=>{
        if(tipo_medida=="L"){
            switch(unidades){
                case("m"):
                    switch(nueva_unidad){
                        case("cm"):
                            return((100*medida)+" cm");
                            break;
                        case("km"):
                            return((0.001*medida)+" km");
                            break;
                        case("ft"):
                            return((3.28*medida)+" ft");
                            break;
                    }
                    break;
                case("cm"):
                    return((0.01*medida)+" m");
                    break;
                case("km"):
                    return((1000*medida)+" m");
                    break;
                case(ft):
                    return((0.3048*medida)+" m");
                    break;
            }
        }
        else if(tipo_medida=="T"){
            switch(unidades){
                case("C"):
                    switch(nueva_unidad){
                        case("F"):
                            return(((1.8*medida)+32)+" F");
                            break;
                        case("K"):
                            return((medida+273.15)+" K");
                            break;
                    }
                    break;
                case("F"):
                    switch(nueva_medida){
                        case("C"):
                            return(((medida-32)/1.8)+" C");
                            break;
                        case("K"):
                            return(((medida+459.67)/1.8)+" K");
                            break;
                    }
                    break;
                case("K"):
                    switch(nueva_unidad){
                        case("C"):
                            return((medida-273.15)+" C");
                            break;
                        case("F"):
                            return((((9/5)*medida)-459.67)+" F");
                            break;
                    }
                    break;
            }
        }
    }
}
function conversion(medida,unidad,nuevaunidad,unidadmedida){
    return(convertir.parametros(medida,unidad,nuevaunidad,unidadmedida));
}