import { useEffect, useState } from 'react';
import "./Clock.scss";
import $ from 'jquery';

function Clock() {
    //const [date, setDate] = useState(new Date());
    const currentSeconds = getSecondsToday();
    const seconds = (currentSeconds / 60) % 1;
    const minutes = (currentSeconds / 3600) % 1;
    const hours = (currentSeconds / 43200) % 1;

    setTime(60 * seconds, "second");
    setTime(3600 * minutes, "minute");
    setTime(43200 * hours, "hour");

    useEffect(() => {
      const clock = setInterval(() => getSecondsToday(), 1000)
      return function cleanup() {
        clearInterval(clock)
      }
    });

      return (
        <div className="clock">
            <div className="clock__second"></div>
            <div className="clock__minute"></div>
            <div className="clock__hour"></div>
            <div className="clock__axis"></div>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
            <section className="clock__indicator"></section>
        </div>
      )
}

function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now.valueOf() - today.valueOf();
  return Math.round(diff / 1000);
}

  function setTime(left:number, hand:string) {
    $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
  }

export default Clock;