import React from 'react';
import 'jquery-mask-plugin';
import 'jquery';
import { Container, Row, Col, Form } from 'react-bootstrap';

function renderHeader() {
  return (
    <header className="header-site">
      <Container>
        <Row>
          <Col lg={12} className="d-flex align-items-center">
            <a href="/" className="logo"><img alt="" src="/img/logo.svg" />Owl Beer</a>
            <ul className="menu-nav d-flex align-items-center list-unstyled ml-auto">
              <li><a href="/#">Calcule</a></li>
              <li><a href="/#">Owl Beer</a></li>
              <li><a href="/#">Listas de Cervejas</a></li>
              <li><a href="/#">Fale Conosco</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

function renderBeers(cerveja) {
    const beers = [
        {name: 'Budweiser', mls: [
            {
                id: 1,
                value: 330
            }, {
                id: 2,
                value: 550
            }
        ]},
        {name:'Heineken', mls:  [
            {
                id: 3,
                value: 250
            }, {
                id: 4,
                value: 330
            }, {
                id: 5,
                value: 600
            }
        ]},
        {name:'Stella', mls: [
            {
                id: 6,
                value: 250
            }, {
                id: 7,
                value: 330
            }, {
                id: 8,
                value: 600
            }
        ]}
    ];

    var allBeers = beers.map(beer =>
        <optgroup label={  beer.name }>{ 
            beer.mls.map(ml => (
                <option value={ml.value}>{ beer.name + ' ' + ml.value + 'ml' }</option>
            ))
         }
         </optgroup>
    );

    return allBeers
}

const RenderButton = (props) => {
    var text = props.text;
    return  <span className="btn-site" onClick={() => props.onClick() }>{ text }</span>
}

class RenderMain extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            preco01: 0,
            preco02: 0,
            ml01: 330,
            ml02: 550,
            valueElementId: ''
        }
    }

    calcBeer() {
        let preco01 = this.state.preco01;
        let ml01 = this.state.ml01;
        let preco02 = this.state.preco02;
        let ml02 = this.state.ml02;
    
        let valueTotal01 = (preco01 / ml01);
        let valueTotal02 = (preco02 / ml02);
  
        if(valueTotal01 < valueTotal02) {
            this.setState({ valueElementId: valueTotal01 });
        } else if(valueTotal02 < valueTotal01) {
            this.setState({ valueElementId: valueTotal02 });
        }
    }

    onChangePreco01(e) {
        this.setState({ preco01: e.target.value });
    }

    onChangePreco02(e) {
        this.setState({ preco02: e.target.value });
    }

    render() {
        return (
            <section className="section-main">
                <Container>
                    <Row>
                        <Col lg={6} className="d-flex align-items-center">
                            <img alt="" className="image-main" src="/img/cerveja.svg" />
                        </Col>
                        <Col lg={6} className="d-flex align-items-center">
                            <h1 className="title-main">Compare o preço <br />da cerveja</h1>
                        </Col>
        
                        <Form className="form-site row">
                            <Col lg={3} className="row">
                                <Col lg={12}>
                                    <div className="box-beer">
                                        <strong className="title-beer">Cerveja mais barata</strong>
                                        <p className="name-beer">Budweiser 330ml</p>
                                        <div className="body-beer">
                                            <img alt="" className="image-beer" src="/img/beer-default.png" />
                                        </div>
                                        <span className="results-beer">{this.state.valueElementId}</span>  
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={9} className="row">
                                <Form.Group className="col-lg-3 offset-lg-3">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control value={this.state.preco01} onChange={(e) => this.onChangePreco01(e)} name="preco" className="money" />
                                </Form.Group>
                                <Form.Group className="col-lg-6">
                                    <Form.Label>Cerveja</Form.Label>
                                    <Form.Control value={this.state.ml01} as="select" id="ml01">
                                        {renderBeers()}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="col-lg-3 offset-lg-3">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control value={this.state.preco02} onChange={(e) => this.onChangePreco02(e)}  id="preco" id="preco02" className="money" />
                                </Form.Group>
                                <Form.Group className="col-lg-6">
                                    <Form.Label>Cerveja</Form.Label>
                                    <Form.Control value={this.state.ml02} as="select" id="ml02">
                                        {renderBeers()}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="offset-lg-7 col-lg-5">
                                    <RenderButton text="Calcule" onClick={() => this.calcBeer()} />
                                </Form.Group>
                            </Col>
                        </Form>
                    </Row>
                </Container>
            </section>
        );
    }
}
function App() {
    return (
      <React.Fragment>
        { renderHeader() }
        <RenderMain />
      </React.Fragment>
    );
}

export default App;
