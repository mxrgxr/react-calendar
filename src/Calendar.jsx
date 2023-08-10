import './Calendar.css'
export default function Calendar({days, dates}){
    const weeks = dates.length / 7;
    return (
        <div className="calendar">
          {Array.from({ length: weeks }, (_, weekIndex) => (
            <div key={`week-${weekIndex}`} className="week">
              {days.map((day, dayIndex) => {
                const dateIndex = weekIndex * 7 + dayIndex;
                const date = dates[dateIndex];
                return (
                    <div key={`day-${dateIndex}`} className="day">
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