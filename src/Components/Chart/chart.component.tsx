import React from 'react'
import { CHART_DATA, CHART_DATA_TYPES } from '../../Dtos/chart'
import ChartBar from './chartBar.component'
import ChartLine from './chartLine.component'
import ChartPie from './chartPie.component'
import ChartArea from './chartArea.component'
import ChartComposed from './chartComposed.component'

interface CHART_PROPS {
    data: CHART_DATA
    className?: string
}

/**
 * Chart Component
 *
 * @param props CHART_PROPS
 * @returns ReactElement
 */
const Chart: React.FC<CHART_PROPS> = (props) => {
    const { data, className } = props

    /**
     * GetChartComponent to get chart by type.
     *
     * @param type string
     * @param data CHART_DATA_TYPES[]
     * @param def object (optional)
     * @returns ReactElement
     */
    const getChartComponent = ({
        type,
        data,
        data2,
        def,
    }: {
        type: string
        data: CHART_DATA_TYPES[]
        data2?: CHART_DATA_TYPES[]
        def?: object
    }): React.ReactElement | any => {
        switch (type) {
            case 'pie':
                return <ChartPie data={data} data2={data2} />
            case 'bar':
                return <ChartBar data={data} />
            case 'bar_stacked':
                return <ChartBar data={data} stacked />
            case 'line':
                return <ChartLine data={data} />
            case 'area':
                return <ChartArea data={data} />
            case 'composed':
                return <ChartComposed data={data} def={def || {}} />
            default:
                return null
        }
    }

    return (
        <div className={`chart-container ${className ?? ''}`}>
            {getChartComponent({
                type: data.type,
                data: data.data,
                data2: data.data2,
                def: data.def,
            })}
        </div>
    )
}

export default Chart
