import { CounterList } from "components/CounterList/CounterList"
import { Component } from "react"

export class Counter extends Component {
    state= {
        totalVotes: 0,
        points: 0,
        marks: {
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5
        }
    }
    onBtnClick = (value) => {
        this.setState((prevState) => ({
                totalVotes: prevState.totalVotes + 1,
                points: prevState.points + value
        }))
    }
    averageMark = () => {
        const average = this.state.points / this.state.totalVotes
        return average? average.toFixed(2) : null;
    }
    render() {
        const average = this.averageMark();
        const {points, totalVotes, marks} = this.state
        return (
            <>
                <p>{points} points</p>
                <p>{totalVotes} votes</p>
                {average && <p>{ average}</p>}
                <CounterList marks={Object.entries(marks) } onLeaveFeadback={this.onBtnClick} />
            </>
        )
}
}