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

function renderButton(text) {
  return (
    <button className="btn-site">{ text }</button>
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
                <Form.Control name="preco" className="money" />
              </Form.Group>
              <Form.Group className="col-lg-3">
                <Form.Label>Quant. em ml</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6">
                <Form.Label>Cerveja</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-3">
                <Form.Label>Preço</Form.Label>
                <Form.Control id="preco" className="money" />
              </Form.Group>
              <Form.Group className="col-lg-3">
                <Form.Label>Quant. em ml</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-lg-6">
                <Form.Label>Cerveja</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
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
