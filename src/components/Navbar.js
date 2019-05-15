import React, {Component} from 'react';
 

class Navbar extends Component{
    render(){
        return(

            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Curriculum Vitae</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Datos Generales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Datos Escolares</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Experiencia Laboral</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Reconocimientos</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Premios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Habilidades</a>
                    </li>
                    
                    </ul>
                </div>
                </nav>
            </header>

        );
    }
}

export default Navbar;

