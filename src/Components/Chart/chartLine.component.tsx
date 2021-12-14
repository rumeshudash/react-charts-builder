import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import {ChartColors} from '../../Constants/chart.constants';
import { CHART_DATA_TYPES } from '../../Dtos/chart';

interface ChartLineProps {
    data: CHART_DATA_TYPES[],
    showCartesianGrid?: boolean,
}

/**
 * ChartLine component to render line chart.
 * 
 * @param data CHART_DATA_TYPES[]
 * @returns ReactElement
 */
const ChartLine:React.FC<ChartLineProps> = ({ data, showCartesianGrid=true }) => {
    return (
        <ResponsiveContainer width='100%' debounce={5} aspect={2}>
            <LineChart width={300} height={300} data={data}>
                { showCartesianGrid && <CartesianGrid strokeDasharray="3 3" /> }
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                { Object.keys(data[0]).map(( key, index ) => {
                    if( key !== 'name' ) {
                        return <Line key={key} type="monotone" dataKey={key} stroke={ChartColors.line[index]}/>
                    }
                    return null;
                }) }
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartLine;
