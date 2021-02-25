import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react'
import {Provider} from 'react-redux';
import store from './store';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header/Header'
import Chart from './components/Chart/Chart'
import Budget from './components/Budget/Budget'
import ListOfBills from './components/Table/ListofBills'
function App() {
  return (
    <Provider store={store}>

  
    <Fragment>
      <Header />
      <Container bg='dark' fluid style={{ marginTop: '2rem' }}>
        <Row style={{ marginBottom: '2rem' }}>
          <Col sm={8}>
            <Chart />
          </Col>
          <Col>
            <Budget />
          </Col>
        </Row>
        <Row>
          <Col>
            <ListOfBills />
          </Col>
        </Row>
      </Container>
    </Fragment>

    </Provider>
  )
}

export default App
