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

function renderBeers(beer) {
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

let calcBeer = () => { // Arrow function
  return function() {
    let preco01 = document.getElementById('preco01').value;
    let ml01 = document.getElementById('ml01').value;
    let element = document.getElementById('elementId');

    let valueTotal = (preco01 / ml01);

    element.innerText = valueTotal;

  }
}

function renderButton(text) {
  return (
    <span className="btn-site" onClick={ calcBeer() }>{ text }</span>
  );
}

function renderMain() {
  
  return (
    <section className="section-main">
      <Container>
        <Row>
          <Col lg={3} className="d-flex align-items-center">
            <img alt="" className="image-main" src="/img/cerveja.svg" />
          </Col>
          <Col lg={8} className="text-right">
            <h1 className="title-main">Compare o preço <br />da cerveja</h1>
            <Form className="form-site row">
              <Form.Group className="col-lg-3">
                <Form.Label>Preço</Form.Label>
                <Form.Control name="preco" id="preco01" className="money" />
              </Form.Group>
              <Form.Group className="col-lg-6">
                <Form.Label>Cerveja</Form.Label>
                <Form.Control as="select" id="ml01">
                    {renderBeers()}
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-3">
                <Form.Label>Preço</Form.Label>
                <Form.Control id="preco" className="money" />
              </Form.Group>
              <Form.Group className="col-lg-6">
                <Form.Label>Cerveja</Form.Label>
                <Form.Control as="select">
                    {renderBeers()}
                </Form.Control>
              </Form.Group>
              <Form.Group className="offset-lg-7 col-lg-5">
                  { renderButton('Calcule') }
              </Form.Group>
            </Form>
          </Col>
          <Col lg={3}>
            <div className="box-beer">
              <strong className="title-beer">Cerveja mais barata</strong>
              <p className="name-beer">Budweiser 330ml</p>
              <span id="elementId"></span>
              <div className="body-beer">
                <img alt="" className="image-beer" src="/img/beer-default.png" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function App() {
    return (
      <React.Fragment>
        { renderHeader() }
        { renderMain() }
      </React.Fragment>
    );
}

export default App;
