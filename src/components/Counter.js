import React, { useEffect } from 'react';

const Counter = ({ticks, setTicks, pause}) => {

    useEffect(() => {
        if(pause) return;
        const ticker = setTimeout(()=> setTicks(ticks+1), 1000);
    },[ticks, pause])

    const sec = ticks % 60;
    const min = Math.floor(ticks / 60) % 60;
    const h   = Math.floor(ticks / 3600);

    return (
        <>
            <p>{h <= 0 ? '' : (h+':')}{(min < 10 ? '0' : '') + min}:{(sec < 10 ? '0' : '')+sec}</p>
        </>
    )
}

export default Counter
