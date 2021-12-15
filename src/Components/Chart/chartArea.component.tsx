import React from 'react'
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { ChartColors } from '../../Constants/chart.constants'
import { CHART_DATA_TYPES } from '../../Dtos/chart'

interface ChartAreaProps {
    data: CHART_DATA_TYPES[]
    showCartesianGrid?: boolean
}

/**
 * ChartArea component to render area chart.
 *
 * @param data CHART_DATA_TYPES[]
 * @returns ReactElement
 */
const ChartArea: React.FC<ChartAreaProps> = ({ data, showCartesianGrid = true }) => {
    return (
        <ResponsiveContainer width='100%' debounce={5} aspect={2}>
            <AreaChart width={300} height={300} data={data}>
                {showCartesianGrid && <CartesianGrid strokeDasharray='3 3' />}
                <XAxis dataKey='label' />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                {Object.keys(data[0]).map((key, index) => {
                    if (key !== 'label') {
                        return (
                            <Area
                                key='key'
                                type='monotone'
                                dataKey={key}
                                stroke={ChartColors.area[index]}
                                fill={ChartColors.area[index]}
                            />
                        )
                    }
                    return null
                })}
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default ChartArea
