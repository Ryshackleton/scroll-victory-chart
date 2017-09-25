import React from 'react'
import ReactDOM from 'react-dom'
import MultiLineChart from './components/MultiLineChart/MultiLineChart'
import * as d3promise from 'd3.promise'

class Main extends React.Component {
  render() {
    const {
      data,
    } = this.props;
    return (
      <div>
        <h1>Victory Chart With Scrolling</h1>
        <MultiLineChart
          data={data}
          xAccessor={"year_id"}
          yAccessor={"cf_final"}
          keyAccessor={"year_id"}
          labelX={"Year"}
          labelY={"Cause Specific Mortality Fraction (%)"}
        />
      </div>
    );
  }
}

const app = document.getElementById('app');

var promise = d3promise.csv('data/COD_public_USA_opioid_cause_male_female.csv');
promise.then((data) => {
  const filtered = modelData(data)
  ReactDOM.render(<Main data={filtered} />, app);
  },
  (error) => error.log('error reading csv data')
);

const modelData = (data) => {
  const malesAllAges = data
    .filter(
      (d) => +d['age_group_id'] === 22
        && +d['sex_id'] === 1
    )
    .map((d) => {
      d.cf_final = +d.cf_final
      d.year_id = +d.year_id
      return d
    })
  const femalesAllAges = data
    .filter(
      (d) => +d.age_group_id === 22
        && +d.sex_id === 2
    )
    .map((d) => {
      d.cf_final = +d.cf_final
      d.year_id = +d.year_id
      return d
    })
  return [ malesAllAges, femalesAllAges ]
}


