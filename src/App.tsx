import React, { useEffect, useState } from "react";
import { Fragment, Info, Toggle } from "./component";
import ToggleContext from "./Context/ToggleContext/ToggleContext";
import fetchData, { TimeData } from "./api/Time/time";

const App: React.FC = () => {
  const [data, setData] = useState<TimeData | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    async function start() {
      setData(null);
      const result = await fetchData();
      setData(result);
      if (result) {
        setCurrentTime(new Date(result.dateTime));
      }
    }
    start();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!data || !currentTime) {
    return <div>Loading...</div>;
  }

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const formattedMinute = String(currentMinute).padStart(2, '0');

  return (
    <>
      <ToggleContext>
        <Fragment />
        <main className="flex justify-between">
          <section className="ml-[6rem] mt-[4rem]">
            <h2 className="font-serif mb-[-3.5rem] text-[22px]">GOOD MORNING, IT’S CURRENTLY</h2>
            <h1 className="font-bold text-[192px]">
              {currentHour}:{formattedMinute}
              <span className="text-[30px]">BST</span>
            </h1>
            <h3 className="font-bold mt-[-2.5rem] text-[32px]">{data.timeZone}</h3>
          </section>
          <Toggle />
        </main>
        {data && <Info data={{...data, dateTime: currentTime.toISOString()}} />}
      </ToggleContext>
    </>
  );
};

export default App;
