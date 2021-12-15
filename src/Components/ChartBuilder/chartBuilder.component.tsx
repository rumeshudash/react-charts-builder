import React, { useEffect, useState } from 'react'
import { CHART_DATA } from '../../Dtos/chart'
import { getPieChartData, getLineChartData } from '../../Utils/chartHelper.utils'
import Chart from '../Chart/chart.component'
import BuilderSettings from './builderSettings.component'

interface CHART_BUILDER_PROPS {
    data: any
    settingData?: any
    onSettingChange?: (settings: any) => void
}

const ChartBuilder: React.FC<CHART_BUILDER_PROPS> = ({
    data,
    settingData = null,
    onSettingChange = () => {},
}) => {
    const [chartData, setChartData] = useState<CHART_DATA>({ type: 'pie', data: [] })
    const [chartSettings, setChartSettings] = useState(settingData || {})
    useEffect(() => {

        let newChartData: CHART_DATA = {
            type: chartSettings.chart,
            data: [],
        }

        if (Object.keys(chartSettings).length > 1) {
            switch (chartSettings.chart) {
                case 'pie':
                case 'donut':
                    newChartData.data = getPieChartData(
                        data,
                        chartSettings.label,
                        chartSettings.value
                    )
                    break;
                case 'line':
                case 'bar':
                case 'column':
                    newChartData.data = getLineChartData(
                        data,
                        chartSettings.label,
                        chartSettings.value
                    )
                    break
            }
        }

        setChartData(newChartData)
    }, [chartSettings])

    const handleSettingChange = (settings: any) => {
        setChartSettings(settings)
        onSettingChange(settings)
    }

    return (
        <div className='chart-builder'>
            <Chart data={chartData} />
            <BuilderSettings
                data={data}
                settings={chartSettings}
                onSettingChange={handleSettingChange}
            />
        </div>
    )
}

export default ChartBuilder
