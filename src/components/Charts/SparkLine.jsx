import React from 'react'

import { Inject, SparklineComponent, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, type, height, width, data, graphFillColor, borderColor, }) => {
  return (
    // <div>SparkLine</div>
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={2}
      valueType="Numeric" 
      fill={graphFillColor}
      border={{ color: borderColor, width: 2 }}
      dataSource={data}
      // x and y from data (as x and yval) ==> axis
      xName="x"
      yName="yval"
      // type={type}
      tooltipSettings={
        {
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true
          }
        }
      }

    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine