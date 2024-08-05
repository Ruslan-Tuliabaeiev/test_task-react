import React, { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
// import { useTranslation } from "react-i18next";

export const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData({ message: 'Data loaded' });
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="h-[1200px] max-w-[1700px] ml-[250px] bg-slate-300 flex items-center justify-center">
            <p className="text-lg font-semibold text-[green]">HomePage</p>
        </div>
    )
}
