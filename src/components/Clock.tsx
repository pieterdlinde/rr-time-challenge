import { useEffect, useState } from 'react';
import "./Clock.css";
import $ from 'jquery';

function Clock() {
    const [date, setDate] = useState(new Date());
    const [currentSeconds, getSecondsToday] = useState(Number);
    var seconds = (currentSeconds / 60) % 1;
    var minutes = (currentSeconds / 3600) % 1;
    var hours = (currentSeconds / 43200) % 1;

    setTime(60 * seconds, "second");
    setTime(3600 * minutes, "minute");
    setTime(43200 * hours, "hour");
    
     
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
          clearInterval(timer)
        }
      });

      return (
        <div className="clock">
            <div className="clockSecond"></div>
            <div className="clockMinute"></div>
            <div className="clockHour"></div>
            <div className="clockAxis"></div>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <section className="clockIndicator"></section>
            <span>{date.toLocaleTimeString()}</span>
        </div>
      )
}

function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let seconds = today.getSeconds();
    return Math.round(seconds);
  }

  function setTime(left:number, hand:string) {
    $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
  }

export default Clock;