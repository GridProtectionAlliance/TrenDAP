//******************************************************************************************************
//  Histogram.tsx - Gbtc
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

//Disabling ESLint as this needs to get reworked
/* eslint-disable */


export default function Histogram(props: { Data: TrenDAP.iXDATrendDataPoint[] }) {
    const ref = React.useRef(null);
    const [type, setType] = React.useState<'Minimum' | 'Average' | 'Maximum'>('Average');
    React.useEffect(() => Initialize(props.Data), [props.Data, type]);

    function Initialize(data: TrenDAP.iXDATrendDataPoint[]) {
        const margin = { bottom: 50, left: 75, top: 65, right: 40 };

        const svgHeight = (window.innerHeight - 270) / 2;
        const svgWidth = (window.innerWidth - 200) / 2;

        d3.select(ref.current).selectAll('svg').remove()
        const svg = d3.select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

        const histogram = d3.histogram<number, number>()
            .value(function (d) { return d; })   // I need to give the vector of value
            .domain(d3.extent(props.Data.filter(d => !isNaN(d[type])), d => d[type]) as [number, number])  // then the domain of the graphic
            .thresholds(40); // then the numbers of bins

        const bins = histogram(props.Data.map(d => d[type]).filter(d => !isNaN(d)));

        const yMax = Math.max(...bins.map(b => b.length));

        const x = d3.scaleLinear()
            .domain([Math.min(...bins.map(a => a.x0)), Math.max(...bins.map(a => a.x1))])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([margin.left, svgWidth - margin.right]);


        const xAxis = svg.append("g")
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(d3.axisBottom(x))

        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text("Channel Output")

        const y = d3.scaleLinear()
            .range([svgHeight - margin.bottom, margin.top])
            .domain([0, yMax]);   // d3.hist has to be called before the Y axis obviously

        const yAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(d3.axisLeft(y));
        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + margin.left / 3 + ")")
            .style("text-anchor", "middle")
            .text("Counts")

        svg.selectAll("rect").remove();
        svg.selectAll("rect")
            .data(bins)
            .enter()
            .append("rect")
            .attr("x", 1)
            .attr("transform", (d) => `translate(${x(d.x0)},${y(d.length)})`)
            .attr("width", (d) => (x(d.x1) - x(d.x0) > 2 ? x(d.x1) - x(d.x0) : 2) - 1)
            .attr("height", (d) => (svgHeight - margin.bottom) - y(d.length))
            .attr("fill", (d) => 'darkblue')
    }

    return (
        <div ref={ref}>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value={type} checked={type == 'Minimum'} onChange={(evt) => setType('Minimum') }/>
                <label className="form-check-label">Min</label>
                </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" checked={type == 'Average'} onChange={(evt) => setType('Average')}/>
                <label className="form-check-label">Avg</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" checked={type == 'Maximum'} onChange={(evt) => setType('Maximum')} />
                <label className="form-check-label">Max</label>
            </div>
        </div>
    );
}