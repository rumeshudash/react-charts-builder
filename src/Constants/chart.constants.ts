export const ChartColors = {
    pie: [
        '#ffa860',
        '#a8d8a8',
        '#3090c0',
        '#f07848',
        '#60c0a8',
        '#a8c0a8',
        '#ff6060',
        '#f0f0a8',
        '#483030',
        '#786048',
    ],
    bar: ['#ffa860', '#a8d8a8', '#3090c0', '#f07848', '#a8c0a8'],
    line: ['#ffa860', '#a8d8a8', '#3090c0', '#f07848', '#a8c0a8'],
    area: ['#f07848', '#a8d8a8', '#3090c0', '#a8c0a8', '#ffa860'],
}

// API CHART DATA TYPES
export const TYPE_CHART_BAR = 57
export const TYPE_CHART_BAR_STACKED = 58
export const TYPE_CHART_PIE = 59
export const TYPE_CHART_LINE = 60

// API CHART ROW TYPE
export const ROW_CHART_HALF = 61
export const ROW_CHART_FULL = 61

// API CHART POSITIONS
export const POS_CHART_VISIBLE = 63
export const POS_CHART_HEADER_OPTION = 64
export const POS_CHART_HEADER = 65

export const ChartItems = [
    {
        key: 'pie',
        name: 'Pie',
    },
    {
        key: 'donut',
        name: 'Donut',
    },
    {
        key: 'line',
        name: 'Line',
    },
    {
        key: 'bar',
        name: 'Bar',
    },
    {
        key: 'stackedBar',
        name: 'Stacked Bar',
    },
    {
        key: 'column',
        name: 'Column',
    },
    {
        key: 'stackedColumn',
        name: 'Stacked Column',
    },
    {
        key: 'area',
        name: 'Area',
    },
]

export const ChartCategories = [
    {
        name: 'Most popular',
        charts: ['pie', 'bar', 'line', 'stackedBar', 'area'],
    },
    {
        name: 'Pie',
        charts: ['pie', 'donut'],
    },
    {
        name: 'Line',
        charts: ['line'],
    },
    {
        name: 'Bar',
        charts: ['bar', 'stackedBar'],
    },
    {
        name: 'Column',
        charts: ['column', 'stackedColumn'],
    },
    {
        name: 'Area',
        charts: ['area'],
    },
]
