import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import { Provider } from 'react-redux';
//redux store
import store from './store';
import { Container, Row, Col } from 'react-bootstrap'
//get the header
import Header from './components/Header/Header'
// get the chart
import Chart from './components/Chart/Chart'
// get the total Budget card
import Budget from './components/Budget/Budget';
// get the table list
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
