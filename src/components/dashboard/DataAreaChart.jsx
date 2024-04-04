import React from 'react';
import {useSelector} from "react-redux";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const DataAreaChart = () => {
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
            <AreaChart
                width={500}
                height={300}
                data={data}
            >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#0866FF" fill="#FFC800" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default DataAreaChart;