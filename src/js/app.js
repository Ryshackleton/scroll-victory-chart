import React from 'react'
import ReactDOM from 'react-dom'
import MultiLineChart from './components/MultiLineChart/MultiLineChart'

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

const series =
  [
    {year: 2012, vals: data2012},
    {year: 2013, vals: data2013},
    {year: 2014, vals: data2014},
    {year: 2015, vals: data2015},
  ];

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <MultiLineChart
          data={series}
        />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);