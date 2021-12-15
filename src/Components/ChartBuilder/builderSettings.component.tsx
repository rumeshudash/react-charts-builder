import React, { Fragment, useEffect, useState } from 'react'
import Select from 'react-select'
import { ChartCategories, ChartItems } from '../../Constants/chart.constants'
import {
    getObjectFromArray,
    getOptionFromValue,
    isEmptyObject,
    isFunction,
    mergeLeftObjects,
    toSelectOptions,
} from '../../Utils/common.utils'
import Collapse from '../Collapse/collapse.component'
import {
    getInputSettingsOnly,
    getNumberKeysFromData,
    getStringKeysFromData,
    pieChartSettings,
} from './../../Utils/chartHelper.utils'

const BuilderSettings = ({ data, settings, onSettingChange }: any) => {
    const [settingsData, setSettingsData] = useState(settings || {})
    const [activeCollapse, setActiveCollapse] = useState<string | null>('chartType')
    const [currentSettings, setCurrentSettings] = useState<any[]>([])
    const [currentChart, setCurrentChart] = useState<string>(settings?.chart || 'pie')

    useEffect(() => {
        setCurrentSettings(getChartSettings())
        console.log(currentChart, settings, getChartSettings())
    }, [currentChart])

    useEffect(() => {
        let newSettings: object = getDefaultSettings()
        if (settings) {
            let prevSettings = { ...settings }
            delete prevSettings.chart
            newSettings = mergeLeftObjects(newSettings, prevSettings);
        }
        setSettingsData(newSettings);
    }, [currentSettings, currentChart])

    useEffect(() => {
        if (isFunction(onSettingChange)) {
            onSettingChange(settingsData)
        }
    }, [settingsData])

    const handleActiveCollapse = (collapsed: boolean, name: string) => {
        if (!collapsed) {
            setActiveCollapse(name)
        } else {
            setActiveCollapse(null)
        }
    }

    const getChartSettings = () => {
        switch (currentChart) {
            case 'pie':
            case 'donut':
                return pieChartSettings
            default:
                return []
        }
    }

    const handleSettingsChange = (key: string, value: any) => {
        let newSettings = { ...settingsData }
        if (isEmptyObject(newSettings)) {
            newSettings = getDefaultSettings()
        }

        if (newSettings.hasOwnProperty(key)) {
            newSettings[key] = value
            setSettingsData(newSettings)
        }
    }

    const getDefaultSettings = () => {
        const inputs = getInputSettingsOnly(currentSettings)
        let settings = {
            chart: currentChart,
        }

        inputs.map((input) => {
            let defaultVal = input.defaultValue
            if (typeof input.defaultValue === 'function') {
                defaultVal = input.defaultValue(data)
            }
            settings[input.key] = defaultVal || null
        })

        console.log( 'settings:', settings )
        return settings
    }

    const getSettingsComponent = (settings: any) => {
        let defaultValue = settings.defaultValue
        if (typeof settings.defaultValue === 'function') {
            defaultValue = settings.defaultValue(data)
        }

        switch (settings.type) {
            case 'collapse':
                if (settings.settings.length > 0) {
                    return (
                        <Collapse
                            title={settings.name}
                            collapse={activeCollapse !== settings.name}
                            onChange={(collapsed) => handleActiveCollapse(collapsed, settings.name)}
                        >
                            {settings.settings.map((setting: any, index: number) => (
                                <Fragment key={settings.type + setting.key + index}>
                                    {getSettingsComponent(setting)}
                                </Fragment>
                            ))}
                        </Collapse>
                    )
                }
                return null
            case 'select':
                let options: any[] = []

                if (settings.valueType === 'string') {
                    options = toSelectOptions(getStringKeysFromData(data))
                } else if (settings.valueType === 'number') {
                    options = toSelectOptions(getNumberKeysFromData(data))
                }

                return (
                    <div className='setting-controls'>
                        {settings.label && (
                            <label className='controls-label'>{settings.label}</label>
                        )}
                        <Select
                            value={getOptionFromValue(
                                options,
                                typeof settingsData[settings.key] === 'undefined'
                                    ? defaultValue
                                    : settingsData[settings.key]
                            )}
                            isClearable={settings.isClearable}
                            options={options}
                            onChange={(option) =>
                                handleSettingsChange(settings.key, option?.value || null)
                            }
                        />
                    </div>
                )
            
            case 'radio':

            default:
                return null
        }
    }

    const getChartItemsElement = (charts: any[]) => {
        return charts.map((chart, index) => {
            const chartObj = getObjectFromArray(ChartItems, 'key', chart)
            return (
                <div key={index + chart} className='chart-item' onClick={() => setCurrentChart(chart)}>
                    {chartObj.name}
                </div>
            )
        })
    }

    return (
        <div className='builder-settings'>
            <h1 className='settings-header'>Settings</h1>
            <div className='setting-items'>
                <Collapse
                    title='Chart Type'
                    collapse={activeCollapse !== 'chartType'}
                    onChange={(collapsed) => handleActiveCollapse(collapsed, 'chartType')}
                >
                    {ChartCategories.map((chartCat, index) => (
                        <div key={chartCat.name + index} className='chart-category'>
                            <div className='category-title'>{chartCat.name}</div>
                            <div className='chart-list'>
                                {getChartItemsElement(chartCat.charts)}
                            </div>
                        </div>
                    ))}
                </Collapse>

                {currentSettings.map((setting, index) => (
                    <Fragment key={setting.name + index}>{getSettingsComponent(setting)}</Fragment>
                ))}
            </div>
        </div>
    )
}

export default BuilderSettings
