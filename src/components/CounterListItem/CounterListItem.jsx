export const CounterListItem = ({textContent, value, onLeaveFeadback}) => (
  <li>
    <button onClick={() => onLeaveFeadback(value)} type="button">
      {textContent}
    </button>
  </li>
);
