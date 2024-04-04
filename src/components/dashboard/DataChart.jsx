import React from 'react';
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend, Line, LineChart, ResponsiveContainer,
} from "recharts"


import {useSelector} from "react-redux";

const DataChart = () => {

    const userCount = useSelector((state)=>state.user.userCount);
    const adsCount = useSelector((state)=>state.user.adsCount);
    const categoryCount = useSelector((state)=>state.user.categoryCount);

    let data = [
        { name: "users", value: userCount },
        { name: "ads", value: adsCount },
        { name: "categories", value: categoryCount },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
        <LineChart
            width={730}
            height={250}
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#149777" />
        </LineChart>
        </ResponsiveContainer>
    );
};

export default DataChart;