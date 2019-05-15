import React, {Component} from 'react';

class Datosgenerales extends Component {
    render(){
        return(

            <div className="card mb-3" style={{width:'18em;'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." className="card-img" alt="..."> </img>
                    </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Datos Generales</h5>
                        <p className="card-text">
                            <p> <strong>Nombre:</strong> Mario Alberto Tenorio Muñoz </p>
                            <p> <strong>Profesión:</strong> Ingeniero en Tecnologías de la Información y Comunicaciones </p>
                            <p> <strong>Dirección:</strong> Av. Rojo Gómez No. 102, Colonia Santa Julia </p>
                            <p> <strong>Teléfono: </strong> 71 4 58 86/771 111 15 23 </p>  
                            <p> <strong>Correo Electrónico:</strong> mario_ten44@hotmail.com </p>
                            <p> Pachuca de Soto, Hidalgo. </p> 
                        </p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div> 

        );
    }
}

export default Datosgenerales;