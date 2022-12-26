import { CounterList } from "components/CounterList/CounterList"
import { useState } from "react"

export const Counter = () => {

    const [totalVotes, setTotalVotes] = useState(0);
    const [points, setPoints] = useState(0);

    const marks = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5
    }

  const onBtnClick = (value) => {
        setTotalVotes(state => state + 1)
        setPoints(state => state + value)
    }
  const averageMark = () => {
        const average = points / totalVotes
        return average? average.toFixed(2) : null;
    }
        const average = averageMark();
        return (
            <>
                <p>{points} points</p>
                <p>{totalVotes} votes</p>
                {average && <p>{ average}</p>}
                <CounterList marks={Object.entries(marks) } onLeaveFeadback={onBtnClick} />
            </>
        )

}