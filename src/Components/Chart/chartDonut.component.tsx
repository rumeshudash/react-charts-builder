import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartColors } from '../../Constants/chart.constants'
import { CHART_DATA_TYPES } from '../../Dtos/chart'

/**
 * ChartDonut component to render pie chart.
 *
 * @param data CHART_DATA_TYPES[]
 * @returns ReactElement
 */
const ChartDonut: React.FC<{
    data: CHART_DATA_TYPES[]
}> = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' debounce={5} aspect={2}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    dataKey='value'
                    nameKey='label'
                    cx='50%'
                    cy='50%'
                    innerRadius='45%'
                    outerRadius='80%'
                    fill={ChartColors.pie[1]}
                    label
                    labelLine={false}
                >
                    {data.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={ChartColors.pie[index % ChartColors.pie.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default ChartDonut
