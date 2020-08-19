//``
import "./styles.css";

document.getElementById("app").innerHTML = `
Bugatti
`;

class Carro {
  constructor(marca, referencia, modelo, color, destino){
    this.marca= marca;
    this.referencia = referencia
    this.modelo= modelo;
    this.color= color;
    this.destino = destino;
    
  }
  Caracteristicas(){
    console.log(
      `Es un ${this.marca}, ${this.referencia}, ${this.modelo},  ${this.color}`);
    
  }

  Seguridad(){
    console.log(
    `Primero que todo la seguridad, asi que ponte el cinturon :)`
    );
    
    return this;
  }

  Encender(){
    console.log(
      `Encender vehiculo`
    );

    return this;
  }
  Arrancar(){
    console.log(
      ` Ingresa las llaves, prendes el carro, pisas el clutch, meter primera, acelerar el carro y soltar el clutch del todo`
      );
    return this;
  }
  Acelerar(){
    console.log(
      `Durante el recorrido se meten los otros 6 cambios`
    );
    return this;
  }

  Frenar(){
    console.log(
      `Para reducir la velocidad, se pisa el freno y se van reduciendo los cambios `
      );
    return this;
  }


}


const auto = new Carro("Bugatti", "Chiron", "2020", "Negro Mate", "Burj Khalifa y luego  al Burj Al Arab");
console.log(auto.Caracteristicas())
console.log(auto.Seguridad());
console.log(auto.Encender());
console.log(auto.Arrancar());
console.log(auto.Acelerar());
console.log(auto.Frenar());


//JOHAN MURILLO      11-1 FO
//JUAN JOSE GIRALDO