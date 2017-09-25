import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel } from 'victory'
import  styles from './MultiLineStyle'

class MultiLineChart extends React.Component {
  render() {
    const {
      data,
      xAccessor,
      yAccessor,
      keyAccessor,
      labelX,
      labelY,
    } = this.props
    data.map((d) => (
    console.log(d)
    ))

    return (
      <div style={styles.base}
           >
      <VictoryChart
        domainPadding={10}
        legend={true}
      >
        <VictoryAxis
          style={styles.axisX}
          label={labelX}
          tickCount={10}
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryAxis
          style={styles.axisY}
          label={labelY}
          dependentAxis
          tickFormat={(y) => (`${y * 100}%`)}
        />
        <VictoryGroup
          colorScale={["red", "blue", "green", "yellow"]}
        >
          {
            data.map((d) => (
              <VictoryLine
                data={d}
                style={+d[0].sex_id === 1 ? styles.lineSolid : styles.lineDotted }
                key={keyAccessor}
                x={xAccessor}
                y={yAccessor}
                />
              )
            )
          }
        </VictoryGroup>
        <VictoryGroup
          colorScale={["red", "blue", "green", "yellow"]}
        >
          {
            data.map((d) => (
                <VictoryScatter
                  data={[d[d.length-1]]}
                  style={styles.scatterDots}
                  size={3}
                  labels={(d) => d.sex }
                  labelComponent={<VictoryLabel dx={25} dy={14}/>}
                  key={keyAccessor}
                  x={xAccessor}
                  y={yAccessor}
                />
              )
            )
          }
        </VictoryGroup>
      </VictoryChart>
        </div>
    )
  }
}

export default MultiLineChart


