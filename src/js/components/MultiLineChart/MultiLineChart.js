import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryStack, VictoryArea, VictoryLabel } from 'victory'
import  styles from './MultiLineStyle'

class MultiLineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataAll: props.data,
      opacity: 0,
    }
  }

  render() {
    const {
      xAccessor,
      yAccessor,
      keyAccessor,
      labelX,
      labelY,
      colorScale = ["red", "blue", "green", "yellow"],
      animate
    } = this.props
    return (
      <div style={ {...styles.base, ...{opacity: this.state.opacity} }}
           >
      <VictoryChart
        domainPadding={0}
        legend={true}
        animate={animate}
      >
        <VictoryAxis
          style={styles.axisY}
          label={labelY}
          dependentAxis
          tickFormat={(y) => (`${y / 1000}K`)}
        />
        <VictoryStack
          colorScale={colorScale}
        >
          {
            this.state.dataAll.map((d) => (
              <VictoryArea
                data={d}
                style={styles.lineSolid }
                key={keyAccessor}
                x={xAccessor}
                y={yAccessor}
                animate={animate}
                />
              )
            )
          }
        </VictoryStack>
        <VictoryStack
          colorScale={colorScale}
        >
          {
            this.state.dataAll.map((d) => (
                <VictoryScatter
                  data={[d[d.length-1]]}
                  style={styles.scatterDots}
                  size={3}
                  labels={(d) => d.series_label }
                  labelComponent={
                    <VictoryLabel dx={-75}
                                  dy={75}/>
                  }
                  key={keyAccessor}
                  x={xAccessor}
                  y={yAccessor}
                />
              )
            )
          }
        </VictoryStack>
        <VictoryAxis
          style={styles.axisX}
          label={labelX}
          tickCount={10}
          tickFormat={(x) => (`${x}`)}
        />
      </VictoryChart>
        </div>
    )
  }
}

export default MultiLineChart


