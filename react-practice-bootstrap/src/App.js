import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Grid, Col, Row } from 'react-bootstrap'
class App extends Component {

  constructor(props){
    super()
    this.props = {}
    this.props.matha = 'Kunal'
    console.log(arguments)
    console.log(this)
  }

  componentWillReceiveProps(){
    console.log('commented-code will recive prposp caled')
  }


  render() {
    return (
      <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code>{'<Col xs={12} md={8} />'};</code>
    </Col>
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
    <Col xsHidden md={4}>
      <code>{'<Col xsHidden md={4} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>{'<Col xs={6} xsOffset={6} />'}</code>
    </Col>
  </Row>
  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>{'<Col md={6} mdPush={6} />'}</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>{'<Col md={6} mdPull={6} />'}</code>
    </Col>
  </Row>
</Grid>
    )
  }
}

export default App;
