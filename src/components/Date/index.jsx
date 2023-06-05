import React from "react";
import "./styles.css";

class DateTimeDisplay extends React.Component {
  render() {
    const currentDate = new Date();
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const dateOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
    };
    const formattedTime = currentDate.toLocaleString("en-US", timeOptions);
    const formattedDate = currentDate.toLocaleString("en-US", dateOptions);

    return (
      <div>
        <span className="time">{formattedTime}</span>
        <br />
        <span className="date">{formattedDate}</span>
      </div>
    );
  }
}

export default DateTimeDisplay;
