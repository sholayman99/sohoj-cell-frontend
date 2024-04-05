import React from 'react';
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {useSelector} from "react-redux";

const DataPiChart = () => {

    const userCount = useSelector((state)=>state.user.userCount);
    const adsCount = useSelector((state)=>state.user.adsCount);
    const categoryCount = useSelector((state)=>state.user.categoryCount);

    let data = [
        { name: "users", value: userCount },
        { name: "ads", value: adsCount },
        { name: "categories", value: categoryCount },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%" aspect={300/300}>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="date"
                    cx="50%"
                    cy="40%"
                    outerRadius={90}
                    fill="#ff5959"
                    label
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DataPiChart;