import React, { useEffect, useState} from 'react';

function CleanupExample() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        console.log('마운트 시점');
        
        //cleanup 함수 반환
        return () => {
            console.log('언마운트 시점');
        }
    }, []);

    return (
        <div>
            {/* <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? '숨기기' : '보이기'}
            </button>
            {isVisible && <Timer />} */}
            Hello Dooly
        </div>
    );
}

function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('타이머 시작');
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds +1);
        }, 1000);

        // cleanup 함수 반환
        return () => {
            console.log('타이머 정리');
            clearInterval(intervalId);
        }
    }, []);

    return (
        <p>타이머: {seconds}초</p>
    )
}

export default CleanupExample;