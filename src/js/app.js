import React from 'react'
import ReactDOM from 'react-dom'
import MultiLineChart from './components/MultiLineChart/MultiLineChart'
import * as d3promise from 'd3.promise'
import ScrollSection from './components/ScrollSection/ScrollSection'

class Main extends React.Component {
  constructor(props) {
    super(props)
    const { data } = this.props
    this.data = data
  }

  watchPositionChange(e) {
    console.log(e)
  }

  setChartOpacityTo1(e) {
    this.chart.setState({ opacity: 1 });
  }
  setChartOpacityToZero(e) {
    this.chart.setState({ opacity: 0 });
  }
  loadSecondData(e) {
    this.chart.setState({ dataAll: [this.data.dummyZeroData, this.data.usaAllAges ] })
  }
  loadAllData() {
    this.chart.setState({ dataAll: [this.data.pittsburgPopOverAllYears, this.data.usaAllAges ] })
  }
  loadOpiodName() {
    this.data.usaAllAges.map((d) => d.series_label = 'US Opioid Deaths')
    this.chart.setState({ dataAll: [this.data.dummyZeroData, this.data.usaAllAges ] })
  }


  wayPoints() {
    return [
      {
        text: "We’re living with a virus-like disease sweeping our nation",
        onEnter: function() {},
        onExit: undefined,
        onProgress: this.watchPositionChange.bind(this),
      },
      {
        text: 'The rates of death rise year after year.',
        onEnter: this.setChartOpacityTo1.bind(this),
        onExit: undefined,
        onProgress: this.watchPositionChange.bind(this),
      },
      {
        text: 'We lost more people than the population of Pittsburgh',
        onEnter: this.loadSecondData.bind(this),
        onExit: undefined,
      },
      {
        text: '',
        onEnter: this.loadAllData.bind(this),
        onExit: undefined,
      },
      {
        text: 'The Problem: Opioid Use',
        onEnter: this.loadOpiodName.bind(this),
        onExit: undefined,
      },
      {
        text: "And we're going to fix it by....",
        onEnter: this.setChartOpacityToZero.bind(this),
        onExit: undefined,
      }
    ]
  }

  render() {
    const {
      data,
    } = this.props;
    return (
      <ScrollSection
        chartClassName={'chart'}
        headerSpaceSize={1000}
        spaceBetweenWaypointsSize={500}
        footerSpaceSize={1000}
        myChart={
          <MultiLineChart
            opacity={0}
            ref={(thisChart) => {
              this.chart = thisChart
              this.chart.setState({ dataAll: []})
            }}
            data={[]}
            xAccessor={"year"}
            yAccessor={"val"}
            keyAccessor={"year"}
            labelX={"Year"}
            labelY={"Number of People"}
            animate={{
              onEnter: {
                easing: 'bounce',
                duration: 2000,
                before: (d) => {
                  console.log('in before with d:')
                  console.log(d)
                  return ({ _y: d.y - 1.0 })
                },
                after: (d) => {
                  console.log('in before with d:')
                  console.log(d)
                  return ({ _y: d.y })
                },
              },
              onExit: {
                duration: 5000,
                easing: 'elastic',
                before: () => ({ _y0: 0.0, _y1: 2.0 }),
                // after: (d) => ({ _y: 0 }),
              }
            }}
          />
        }
        textActions={this.wayPoints()}
      />

    )
  }
}

const app = document.getElementById('app');

const promise = d3promise.csv('data/USA_deaths_by_opioids_per_year_compare_Pitt.csv');
promise.then((data) => {
  const filtered = modelData(data)
  ReactDOM.render(<Main data={filtered} />, app);
  },
  (error) => error.log('error reading csv data')
);

const modelData = (data) => {
  const usaAllAges = data
    .filter(
      (d) => d['location_name'] === 'United States'
    )
    .map((d) => {
      d.series_label = 'Deaths in the US'
      d.val = +d.val
      d.year = +d.year
      return d
    })
  const pittsburgPopOverAllYears = data
    .filter(
      (d) => d['location_name'] === 'Pittsburgh Population'
    )
    .map((d) => {
      d.series_label = 'Population of Pittsburgh'
      d.val = +d.val
      d.year = +d.year
      return d
    })

  const dummyZeroData = pittsburgPopOverAllYears.map((d) => {
    const out = { ...d }
    out.series_label = ''
    out.val = 0
    out.year = +d.year
    return out;
  })

  return { dummyZeroData, pittsburgPopOverAllYears, usaAllAges }
}


