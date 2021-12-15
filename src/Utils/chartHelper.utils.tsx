import { CHART_DATA_PIE } from '..'
import { IsArray } from './common.utils'

export const pieChartSettings = [
    {
        name: 'Labels',
        type: 'collapse',
        settings: [
            {
                key: 'label',
                type: 'select',
                valueType: 'string',
                defaultValue: (data: any[]) => {
                    const keys = getStringKeysFromData(data)
                    return keys[0] || null
                },
                isClearable: false,
            },
        ],
    },
    {
        name: 'Values',
        type: 'collapse',
        settings: [
            {
                key: 'value',
                type: 'select',
                label: 'Chart Value',
                valueType: 'number',
                defaultValue: (data: any[]) => {
                    const keys = getNumberKeysFromData(data)
                    return keys[0] || null
                },
                isClearable: true,
            },
            {
                key: 'aggregate',
                label: 'Calculation Function',
                type: 'radio',
            },
        ],
    },
]

export const lineChartSettings = [
    {
        name: 'X Axis',
        type: 'collapse',
        settings: [
            {
                key: 'label',
                type: 'select',
                valueType: 'string',
                defaultValue: (data: any[]) => {
                    const keys = getStringKeysFromData(data)
                    return keys[0] || null
                },
                isClearable: false,
            },
        ],
    },
    {
        name: 'Y Axis',
        type: 'collapse',
        settings: [
            {
                key: 'value',
                type: 'select',
                label: 'Chart Value',
                valueType: 'number',
                defaultValue: (data: any[]) => {
                    const keys = getNumberKeysFromData(data)
                    return keys[0] || null
                },
                isClearable: true,
            },
            {
                key: 'aggregate',
                label: 'Calculation Function',
                type: 'radio',
            },
        ],
    },
]

export const getStringKeysFromData = (data: any[]) => {
    if (IsArray(data)) {
        return Object.keys(data[0]).filter((item) => typeof data[0][item] === 'string')
    }
    return []
}

export const getNumberKeysFromData = (data: any[]) => {
    if (IsArray(data)) {
        return Object.keys(data[0]).filter((item) => typeof data[0][item] === 'number')
    }
    return []
}

export const getInputSettingsOnly = (settings: any[]) => {
    let inputs: any[] = []

    settings.map((item) => {
        if (item.type === 'collapse') {
            inputs = [...inputs, ...getInputSettingsOnly(item.settings)]
        } else {
            inputs = [...inputs, item]
        }
    })

    return inputs
}

export const getPieChartData = (data: any[], labelKey: string, valueKey: string): CHART_DATA_PIE[] => {
    return data.map((item) => ({
        label: item[labelKey],
        value: item[valueKey] || 0,
    }))
}

export const getLineChartData = (data: any[], labelKey: string, valueKey: string): CHART_DATA_PIE[] => {
    return data.map((item) => ({
        label: item[labelKey],
        value: item[valueKey] || 0,
    }))
}
