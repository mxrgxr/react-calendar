import './Calendar.css'
export default function Calendar({ days, dates, colorMap, setColorMap, selectedColor }) {
  const weeks = dates.length / 7;

  const handleDayClick = (dateIndex) => {
    if (selectedColor) {
      const updatedColorMap = { ...colorMap };
      updatedColorMap[dateIndex] = selectedColor;
      setColorMap(updatedColorMap);
    }
  };

  return (
    <div className="calendar">
      {Array.from({ length: weeks }, (_, weekIndex) => (
        <div key={`week-${weekIndex}`} className="week">
          {days.map((day, dayIndex) => {
            const dateIndex = weekIndex * 7 + dayIndex;
            const date = dates[dateIndex];
            const dayColor = colorMap[dateIndex];

            return (
              <div
                key={`day-${dateIndex}`}
                className={`day ${dayColor}`}
                onClick={() => handleDayClick(dateIndex)}
              >
                <div>{day.name}</div>
                <div>{date}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}