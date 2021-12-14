import React from 'react'

import { ChartBuilder } from 'react-charts-builder'
import 'react-charts-builder/dist/index.css'

const App = () => {
    const demoChartData = [
        {
            name: 'Sun',
            date: '1 Dec',
            sales: 2400,
            profit: 400,
        },
        {
            name: 'Mon',
            date: '2 Dec',
            sales: 2210,
            profit: 300,
        },
        {
            name: 'Tue',
            date: '3 Dec',
            sales: 2290,
            profit: 100,
        },
        {
            name: 'Wed',
            date: '3 Dec',
            sales: 2000,
            profit: 700,
        },
        {
            name: 'Thu',
            date: '3 Dec',
            sales: 2181,
            profit: 200,
        },
        {
            name: 'Fri',
            date: '4 Dec',
            sales: 2500,
            profit: 900,
        },
        {
            name: 'Sat',
            date: '4 Dec',
            sales: 2100,
            profit: 100,
        },
    ]

    const testSettings = {
        chart: 'pie',
        label: 'date',
        value: 'sales',
        aggregate: null,
    }
    
    const handleSettingsChange = (settings: any) => {
        console.log(settings)
    }
    return (
        <div style={{ margin: '10px auto', width: '80vw', border: '1px solid #ccc' }}>
            <ChartBuilder data={demoChartData} settingData={testSettings} onSettingChange={handleSettingsChange} />
        </div>
    )
}

export default App
