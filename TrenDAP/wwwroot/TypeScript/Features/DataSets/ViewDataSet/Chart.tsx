//******************************************************************************************************
//  Chart.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  02/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../../global';
import * as d3 from 'd3';
import moment from 'moment';

export default function Chart(props: { Data: TrenDAP.iXDATrendDataPoint[], SetSelected: (record: TrenDAP.iXDATrendDataPoint) => void }) {
    const ref = React.useRef(null);
    const [chartAction, setChartAction] = React.useState<TrenDAP.ChartAction>('Pan');

    React.useEffect(() => Initialize(props.Data), [props.Data]);

    function HandleReset() {
        //setRecord(record.CalculateAxisRange('x'));
    }

    function Initialize(data: TrenDAP.iXDATrendDataPoint[]) {
        const margin = { bottom: 50, left: 75, top: 65, right: 40 };

        const svgHeight = (window.innerHeight - 270)/2;
        const svgWidth = (window.innerWidth - 200) / 2;

        d3.select(ref.current).selectAll('svg').remove()
        const svg = d3.select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

        const x = d3.scaleUtc()
            .domain(d3.extent(props.Data, d=> moment.utc(d.Timestamp)))
            .range([margin.left, svgWidth - margin.right]);

        svg.selectAll('g.xaxis').remove();
        const xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(d3.axisBottom(x))

        svg.append("g").classed('xaxis', true).append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text("Time")

        const y = d3.scaleLinear()
            .range([svgHeight - margin.bottom, margin.top])
            .domain([d3.min(props.Data, d => d.Minimum), d3.max(props.Data, d => d.Maximum)]);

        svg.selectAll('g.yaxis').remove();
        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (margin.left) + ",0)")
            .call(d3.axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => d3.format("~s")(value)));

        const text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text("Channel Output");
        text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + ((margin.left) / 3) + ")").style("text-anchor", "middle");

        svg.selectAll('g.max').data([props.Data]).enter().append('g').attr('class', 'max').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3.line<TrenDAP.iXDATrendDataPoint>().x(d => x(moment.utc(d.Timestamp).toDate().getTime())).y(d => y(d.Maximum)))
        svg.selectAll('g.min').data([props.Data]).enter().append('g').attr('class', 'min').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3.line<TrenDAP.iXDATrendDataPoint>().x(d => x(moment.utc(d.Timestamp).toDate().getTime())).y(d => y(d.Minimum)))

        const points = svg.selectAll("g.points")
            .data([props.Data])
            .enter().append('g').attr('class', 'points');


        const point = points.selectAll('point').data(d => d).enter().append('g').attr('class', 'point');
        //point.append('path').attr('stroke', 'lightgray').attr('d', d => `M ${x(moment.utc(d.Timestamp).toDate().getTime())}, ${y(d.Average)} V ${y(d.Maximum)}Z`);
        //point.append('path').attr('stroke', 'lightgray').attr('d', d => `M ${x(moment.utc(d.Timestamp).toDate().getTime())}, ${y(d.Average)} V ${y(d.Minimum)}Z`)
        point.append("circle")
            .attr("r", 3.5)
            .attr("cx", function (d) { return x(moment.utc(d.Timestamp).toDate().getTime()); })
            .attr("cy", function (d) { return y(d.Average); })
            .on('click', (e,d: any) => { props.SetSelected(d) })
            .style('cursor', 'pointer');


    }



    return (
        <div ref={ref} style={{ userSelect: 'none' }}>
        </div>
    );
}