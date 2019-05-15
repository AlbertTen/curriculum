import React, {Component} from 'react';

class Experiencia extends Component {
    render(){
        return(
<div align="center">
<p>
  <a class="btn btn-success" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
  Instituto Hidalguense de la Juventud (A través del Programa "Jóvenes Construyendo el Futuro" del Gobierno de México)</a>
  <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
  Vera Pachuca</button>
  <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
  Pragna/Vera Pachuca (A través del Programa "Mi Primer Empleo, Mi Primer Salario" del Gobierno de Hidalgo)</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1" align="justify">
      <div class="card card-body">
        <strong> Período: </strong> Marzo 2019 - Actualmente. <br></br>
        A través del programa "Jóvenes Construyendo el Futuro", me estoy capacitando en temas de diseño web, 
        programación y base de datos, dentro del área de Tecnologías de la Información y Comunicación.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2" align="justify">
      <div class="card card-body">
        <strong> Período: </strong> Contratación por proyecto. Noviembre 2018 - Febrero 2019. <br></br> <br></br>
        Elaboración e implementación de 2 tiendas en línea en Prestashop. <br></br> <br></br>
        La primera tienda en línea fue para "ManRab", empresa que se dedica a la venta de materias primas, desechable y 
        material ecológico, todo lo necesario para cualquier fiesta.

        Y la segunda tienda en línea, fue para "PekeShoes", empresa que se dedica a la venta de calzado para niños.

      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample3" align="justify">
      <div class="card card-body">
        <strong> Período: </strong> Abril 2018 - Septiembre 2018 (Por terminación de período  dentro del programa). <br></br> <br></br>
        A través del programa "Mi Primer Empleo, Mi Primer Salario", del Gobierno de Hidalgo, se desarrolló una página web para la 
        Psicológa Valery Dennis Márquez Sierra así como una campaña de artículos y correos masivos (marketing) en Mailchimp, 
        con el fin de dar difusión a la venta de su libro "También Perdiendo Se Gana" y a los eventos en los que iba a participar.
        <br></br><br></br>De igual forma la creación de formularios de contacto en Google y creación de una tienda en línea en Prestahop 
        para "Aruna Bisutería", la cual se dedica a la venta de accesorios. 
      </div>
    </div>
  </div>

</div>

</div>

        );
    }
}

export default Experiencia;