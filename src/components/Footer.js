import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-success">Go somewhere</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;