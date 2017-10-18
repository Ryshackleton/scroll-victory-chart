import React from 'react'
import Waypoint from 'react-waypoint'

export default class ScrollSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      chartClassName,
      headerSpaceSize,
      spaceBetweenWaypointsSize,
      footerSpaceSize,
      myChart,
      textActions,
    } = this.props
    return (
      <div className="scroll-section">
        <div className="basic-example__scrollable-parent">
          <div className={chartClassName}>
            {
              myChart
            }
          </div>
          <div style={{height:headerSpaceSize}} className="header__spacer" />
          {
            textActions.map(wp => {
              return ([
                <div style={{height:spaceBetweenWaypointsSize}} className="between-waypoint__spacer" />,
                <div style={{borderTop:'1px dashed red'}} className="debug__waypoint-line"/>,
                  <div className={'waypoint__text'}>
                    <h3>{wp.text}</h3>
                  </div>,
                <Waypoint
                  onEnter={wp.onEnter}
                  onLeave={wp.onExit}
                  onProgressChanged={wp.onProgress}
                  />
                  ]
              )}
            )
          }
          <div style={{height:footerSpaceSize}} className="footer__spacer" />
        </div>
      </div>
    )
  }
}
