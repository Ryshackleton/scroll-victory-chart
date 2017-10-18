

const AXES_STROKE = 2;

const dottedGrid = {
  stroke: 'lightgray',
  strokeDasharray: '2,2',
};

const noGrid = {
  strokeOpacity: 0,
};

const ticks = {stroke: "gray", size: 2, strokeWidth: AXES_STROKE, };

export default {
  base: {
    position:'fixed',
    // height: '80vh',
    top: '30vh',
    right: '2vw',
    border: "1px solid #ccc",
    width: '50vw',
  },
  axisX: {
    axis: {stroke: 'black', strokeWidth: AXES_STROKE},
    axisLabel: {fontSize: 12, padding: 20},
    grid: noGrid,
    ticks: ticks, 
    tickLabels: {fontSize: 10, padding: 5}
  },
  axisXLabel: {
  },
  axisY: {
    axis: {stroke: 'black', strokeWidth: AXES_STROKE, },
    axisLabel: {fontSize: 12, padding: 30},
    grid: dottedGrid,
    ticks: ticks, 
    tickLabels: {fontSize: 10, padding: 5}
  },
  lineSolid: {
    data: {
      strokeWidth: 3,
      strokeLinecap: 'round',
    },
    // parent: { border: "1px solid #ccc"}
  },
  lineDotted: {
    data: {
      strokeWidth: 3,
      strokeDasharray: '5,8',
      strokeLinecap: 'round',
    },
  },
  scatterDots: {
    data: {
      strokeWidth: 1,
    }
  }
}
