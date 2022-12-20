import { CounterListItem } from "components/CounterListItem/CounterListItem"


export const CounterList = ({marks, onLeaveFeadback }) => (
    <ul>
        {marks.map(([key, value]) => {
            return (
                <CounterListItem
                    key={key}
                    textContent={key}
                    value={value}
                    onLeaveFeadback={onLeaveFeadback} />
            )
        })}
    </ul>
)