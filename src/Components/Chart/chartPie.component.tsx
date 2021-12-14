import React from "react";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { ChartColors } from "../../Constants/chart.constants";
import { CHART_DATA_TYPES } from "../../Dtos/chart";

/**
 * ChartPie component to render pie chart.
 *
 * @param data CHART_DATA_TYPES[]
 * @returns ReactElement
 */
const ChartPie: React.FC<{
    data: CHART_DATA_TYPES[];
    data2?: CHART_DATA_TYPES[];
}> = ({ data, data2 }) => {
    if (!data2) {
        return (
            <ResponsiveContainer width="100%" debounce={5} aspect={2}>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="label"
                        fill={ChartColors.pie[0]}
                        label
                        labelLine={false}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={
                                    ChartColors.pie[
                                        index % ChartColors.pie.length
                                    ]
                                }
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        );
    } else {
        return (
            <ResponsiveContainer width="100%" debounce={2} aspect={2}>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius="60%"
                        fill={ChartColors.pie[0]}
                    />
                    <Pie
                        data={data2}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="80%"
                        fill={ChartColors.pie[1]}
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        );
    }
};

export default ChartPie;
