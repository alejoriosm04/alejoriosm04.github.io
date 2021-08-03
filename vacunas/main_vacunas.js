var d = new Date();
        var numDia = d.getDay();
        var traduccion;
        
        switch(numDia){
            case 0:
                traduccion = "Domingo";
                break;
            case 1:
                traduccion = "Lunes";
                break;
            case 2:
                traduccion = "Martes";
                break;
            case 3:
                traduccion = "Miércoles";
                break;
            case 4:
                traduccion = "Jueves";
                break;
            case 5:
                traduccion = "Viernes";
                break;
            case 6:
                traduccion = "Sábado";
                break;
            default:
                traduccion ="[error]"
        }
        
        document.write("El día de hoy es: " + traduccion);