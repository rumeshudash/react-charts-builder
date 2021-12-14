import React from "react";
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { ChartColors } from "../../Constants/chart.constants";
import { CHART_DATA_TYPES } from "../../Dtos/chart";

/**
 * ChartComposed component to render composed chart.
 *
 * @param data CHART_DATA_TYPES[]
 * @param def object
 * @returns ReactElement
 */
const ChartComposed: React.FC<{ data: CHART_DATA_TYPES[]; def: object }> = ({
    data,
    def,
}) => {
    return (
        <ResponsiveContainer width="100%" debounce={5} aspect={2}>
            <ComposedChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {Object.keys(def).map((key, index) => {
                    if (def[key] === "area") {
                        return (
                            <Area
                                type="monotone"
                                dataKey={key}
                                stroke={ChartColors.area[index]}
                                fill={ChartColors.area[index]}
                            />
                        );
                    } else if (def[key] === "bar") {
                        return (
                            <Bar dataKey={key} fill={ChartColors.bar[index]} />
                        );
                    } else if (def[key] === "line") {
                        return (
                            <Line
                                type="monotone"
                                dataKey={key}
                                stroke={ChartColors.line[index]}
                            />
                        );
                    }

                    return null;
                })}
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default ChartComposed;
