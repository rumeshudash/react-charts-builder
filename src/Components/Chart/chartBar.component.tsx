import React from "react";
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { ChartColors } from "../../Constants/chart.constants";
import { CHART_DATA_TYPES } from "../../Dtos/chart";

/**
 * ChartBar component to render bar chart.
 *
 * @param data CHART_DATA_TYPES[]
 * @returns ReactElement
 */
const ChartBar: React.FC<{ data: CHART_DATA_TYPES[]; stacked?: boolean }> = ({
    data,
    stacked,
}) => {
    return (
        <ResponsiveContainer width="100%" debounce={5} aspect={2}>
            <BarChart width={300} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {Object.keys(data[0]).map((key, index) => {
                    if (key !== "name") {
                        return (
                            <Bar
                                key={key}
                                stackId={stacked ? "stacked" : key}
                                dataKey={key}
                                fill={ChartColors.bar[index]}
                            />
                        );
                    }
                    return null;
                })}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartBar;
