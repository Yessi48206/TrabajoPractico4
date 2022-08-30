/*1- Crea un objeto llamado auto que tenga algunas características como el color,
 marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
  permitir encender y apagar el auto.*/

  //crear un objeto
  let auto = {
    //propiedades
    auto :"fiat",
    marca:"fox",
    color:"azul",
    anio: 2022,
    motor:false,

    //metodos
    
    encender(){
        this.motor=true;
    },
    apagar(){
        this.motor=false;
    }
    }
    document.write(`<p> Auto : ${auto.auto }</p>`);
    document.write(`<p> Marca : ${auto.marca }</p>`);
    document.write(`<p> Color : ${auto.color }</p>`);
    document.write(`<p> Año : ${auto.anio }</p>`);

    let llave= parseInt(prompt("si desea encender el auto digite 1 caso contrario dijite 0"));

    if(llave===1){
        auto.encender();
        document.write(`<p> AUTO :  encendido`);
    }else(llave ===0)
    {
        document.write(`<p> AUTO :  apagado`);
    }

