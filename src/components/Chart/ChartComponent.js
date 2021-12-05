import './Chart.css';
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, ZAxis } from 'recharts';
import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent';
import {chartColors} from '../../constants/global';

const CustomTooltip = props => {
    if (props.payload[0] != null) {
        const newPayload = [
            {
                name: 'Name',
                value: props.payload[0].payload.name,
            },
            {
                name: 'Rank',
                value: props.payload[0].payload.rank,
            },
            ...props.payload,
        ];
        return <DefaultTooltipContent {...props} payload={newPayload} />;
    }

    return <DefaultTooltipContent {...props} />;
};

export default function ChartComponent({ data }) {
    return (
        <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    width={400}
                    height={400}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 80,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Market Cap" />
                    <YAxis type="number" dataKey="y" name="Volume" />
                    <ZAxis type="number" dataKey="z" name="Price Change" />
                    <Tooltip content={<CustomTooltip />} />
                    <Scatter name="Liquidity" data={data} fill="#8884d8">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}
