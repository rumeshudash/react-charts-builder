export interface CHART_DATA {
    type: 'pie' | 'donut' | 'area' | 'bar' | 'column' | 'bar_stacked' | 'line' | 'composed';
    name?: string;
    description?: string;
    data: CHART_DATA_TYPES[];
    data2?: CHART_DATA_TYPES[];
    className?: string;
    def?: {
        [ key: string ] : 'area' | 'bar' | 'line',
    };
}

export type CHART_DATA_TYPES = CHART_DATA_PIE | CHART_DATA_BAR | CHART_DATA_LINE | CHART_DATA_COMPOSED;

export interface CHART_DATA_PIE {
    label: string;
    value: number;
}

export interface CHART_DATA_BAR {
    name: string;
    [key: string]: string | number | number[];
}

export interface CHART_DATA_LINE {
    name: string;
    [key: string]: string | number;
}


export interface CHART_DATA_COMPOSED {
    name: string;
    [key: string]: string | number;
}