import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'
import  styles from './MultiLineStyle'

class MultiLineChart extends React.Component {
  render() {
    const {
      data,
    } = this.props

    return (
      <div style={styles.base}
           >
      <VictoryChart
        domainPadding={10}
      >
        <VictoryAxis
          style={styles.axisY}
          tickCount={4}
          //tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          style={styles.axisX}
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
          colorScale={["red", "blue", "green", "yellow"]}
        >
          {
            data.map((d) => (
              <VictoryLine
                data={d.vals}
                style={d.year === 2014 ? styles.lineSolid : styles.lineDotted }
                key={d.year}
                x={"quarter"}
                y={"earnings"}
                />
              )
            )
          }
        </VictoryStack>
      </VictoryChart>
        </div>
    )
  }
}

export default MultiLineChart


