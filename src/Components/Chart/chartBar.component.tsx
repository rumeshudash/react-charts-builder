import React from 'react'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { ChartColors } from '../../Constants/chart.constants'
import { CHART_DATA_TYPES } from '../../Dtos/chart'

/**
 * ChartBar component to render bar chart.
 *
 * @param data CHART_DATA_TYPES[]
 * @returns ReactElement
 */
const ChartBar: React.FC<{
    data: CHART_DATA_TYPES[]
    stacked?: boolean
    showCartesianGrid?: boolean
}> = ({ data, stacked, showCartesianGrid = true }) => {
    return (
        <ResponsiveContainer width='100%' debounce={5} aspect={2}>
            <BarChart width={300} height={300} data={data}>
                {showCartesianGrid && <CartesianGrid vertical={false} strokeDasharray='3 3' />}
                <XAxis dataKey='label' />
                <YAxis />
                <Tooltip />

                {Object.keys(data[0]).length > 2 ? (
                    Object.keys(data[0]).map((key) => {
                        if (key !== 'label') {
                            return (
                                <Bar key={key} stackId={stacked ? 'stacked' : key} dataKey={key} />
                            )
                        }
                        return null
                    })
                ) : (
                    <Bar dataKey='value' fill={ChartColors.bar[0]}>
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={ChartColors.bar[index % ChartColors.bar.length]}
                            />
                        ))}
                    </Bar>
                )}
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ChartBar
