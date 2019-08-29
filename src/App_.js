import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Hello World!',
            preco: 1.0,
            ml: 250,
            valorFinal: '',
            // ...
        }
    }

    calcular() {
        this.setState({
            valorFinal: (this.state.preco * this.state.ml)
        });
    }

    render() {
        return(
            <div>
                <div>
                    <p>{this.state.text}</p>
                    <br />
                    <input value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                    <br />
                    <input value={this.state.preco} onChange={(e) => this.setState({ preco: e.target.value })} />
                    <br />
                    <input value={this.state.ml} onChange={(e) => this.setState({ ml: e.target.value })} />
                    <br />
                    <p>{this.state.valorFinal}</p>
                    <br/>
                    <button onClick={() => this.calcular()}>Clique aqui!!!</button>
                </div>
            </div>
        )
    }
}

export default App;


// <?php

// class Component {
//     protected $state = [];
// }

// <?php

// class App extends Component {
//     public __construct() {
//         $this->state = [
//             'text' => 'Hello World!'
//         ];
//     }

//     public function render() {
//         return "<h1>" . $this->text . "</h1>";
//     }
// }