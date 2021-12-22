import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <>
                <div className='col'>
                    <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                        <img className="card-img-top" src={this.props.immagine} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.nomePiatto} Rollo</h5>
                            <p className="card-text">{this.props.prezzo} soldi</p>
                            <btn className="btn btn-outline-danger">Elimina</btn>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}

export default Card; 