import React from "react";

import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, Legend, Category, StackingColumnSeries, Tooltip
} from '@syncfusion/ej2-react-charts'

// import {stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis} from '../../assets/dummy'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../assets/data/ecommerce_page_data'

const Stacked = ({ width, height }) => {
  // return <div>Stacked</div>;
  return (
    <ChartComponent
      id="stack-chart"  //don't add space in id , becoz, some property will not work
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }} //remove outside border
      tooltip={{ enable: true }}
      legendSettings={{ background: "white"}}  

    >
      <Inject services={[Legend, Category, Tooltip, StackingColumnSeries]} />
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((item, index) =>
            <SeriesDirective key={index} {...item} />
          )
        }
      </SeriesCollectionDirective>

    </ChartComponent>
  )
};

export default Stacked;
