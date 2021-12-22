import Navbar from './Components/navbar';
import Card from './Components/card';
import React, { Component } from 'react'; 
import kebab from './images/kebab.jpg';

class App extends Component {

state = {
  cards:[
    {id:0,  immagine: kebab,  nomePiatto:"Piatto Marcio0", prezzo:100},
    {id:1,  immagine: kebab,  nomePiatto:"Piatto Marcio1", prezzo:101},
    {id:2,  immagine: kebab,  nomePiatto:"Piatto Marcio2", prezzo:102},
    {id:3,  immagine: kebab,  nomePiatto:"Piatto Marcio3", prezzo:103},
    {id:4,  immagine: kebab,  nomePiatto:"Piatto Marcio4", prezzo:104},
    {id:5,  immagine: kebab,  nomePiatto:"Piatto Marcio5", prezzo:105},
    {id:6,  immagine: kebab,  nomePiatto:"Piatto Marcio6", prezzo:106}
  ]
}

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1 >Il capo dei capi</h1>
          <hr></hr>
          <div className='row'>
            {this.state.cards.map(card => (
              <Card 
                key={card.id}
                immagine={card.immagine}
                nomePiatto={card.nomePiatto}
                prezzo={card.prezzo}
              ></Card>

            ))}
          </div>
        </div>
      </>
    )
  };
}

export default App;
