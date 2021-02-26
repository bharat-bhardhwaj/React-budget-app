import React from 'react'
import { Line } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// create the time series chart
const ChartsPage = () => {
  //get the list Data state from reducer
  const listData = useSelector((state) => state.listDataReducer.bills)
  // data sets for chart
  const dataLine = {
    labels: listData.map((ele) => ele.date),
    datasets: [
      {
        label: 'Amount',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'lightblue',
        borderColor: 'blue',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(205, 130,1 58)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: listData.map((ele) => ele.amount),
      },
    ],
  }

  return (
    <Card
      style={{
        borderRadius: '1rem',
      }}
      className='shadow-lg mb-2 '
    >
      <MDBContainer>
        <h3 className='mt-5'>Monthly bills</h3>
        <Line data={dataLine} options={{ responsive: true }} />
      </MDBContainer>
    </Card>
  )
}

export default ChartsPage
