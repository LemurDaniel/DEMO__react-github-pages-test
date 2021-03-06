import React, { useEffect, useState } from 'react';


const Counter = ({ticks, setTicks, pause}) => {

    const [ticker, setTicker] = useState(null);
    useEffect(() => {
        // Should prevent a bug from occuring.
        if(ticker !== null) clearTimeout(ticker);
        if(!pause) setTicker(setTimeout(() => setTicks(ticks+1), 1000));
    },[ticks, pause])

    const sec = ticks % 60;
    const min = Math.floor(ticks / 60) % 60;
    const h   = Math.floor(ticks / 3600);

    let str = h <= 0 ? '' : (h+':');
    str += (min < 10 ? '0' : '') + min + ':';
    str += (sec < 10 ? '0' : '') + sec;

    return (
        <>
            <p>{str}</p>
        </>
    )
}

export default Counter
