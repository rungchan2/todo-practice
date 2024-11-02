import React from 'react'
import {useEffect, useState} from 'react'

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

  return (
    <div>
        현재 시간 : {time.toLocaleTimeString()}
    </div>
  )
}

export default Clock;