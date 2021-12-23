import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <>
                <div className='col'>
                    <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                        <button type="button" onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
                            Aggiungi <span className='badge bg-light text-dark'>{this.props.card.quantita}</span>
                        </button>

                        <img className="card-img-top" src={this.props.card.immagine} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.card.nomePiatto} Rollo</h5>
                            <p className="card-text">{this.props.card.prezzo} soldi</p>
                            <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}

export default Card; 