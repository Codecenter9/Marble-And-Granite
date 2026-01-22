"use client";

import { useEffect, useState } from "react";

type CounterItem = {
    label: string;
    value: number;
    suffix?: string;
};

const counters: CounterItem[] = [
    { label: "Years of Experience", value: 15, suffix: "+" },
    { label: "Happy Clients", value: 280, suffix: "+" },
    { label: "Marble Types", value: 40, suffix: "+" },
];

const CounterCard = ({ label, value, suffix }: CounterItem) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1200;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="flex flex-col items-center justify-center rounded-lg border-b border-pink-500 p-6 text-center transition-transform hover:-translate-y-1">
            <span className="text-4xl font-bold text-pink-500">
                {count}
                {suffix}
            </span>
            <span className="mt-2 text-sm font-medium text-pink-400">
                {label}
            </span>
        </div>
    );
};

const Counters = () => {
    return (
        <section className="w-full">
            <div className="flex flex-row justify-center gap-6 ">
                {counters.map((item, index) => (
                    <CounterCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Counters;
