import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

function average(data) {
    const kelvin = (_.sum(data)/data.length);
    const fahrenheit = _.round((kelvin - 273.15)*1.8) + 32;
    return fahrenheit;
}
export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}