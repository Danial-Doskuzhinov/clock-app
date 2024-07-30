import { TimeData } from "../../api/Time/time"
import { useTheme } from "../../Context/ToggleContext/ToggleContext"

const Info = ({data}:{data:TimeData}) => {
   const {isOpen} = useTheme();
   
   function isLeapYear(year: number) {
       return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
   }

   function dayOfYear(year: number, month: number, day: number) {
       const daysInMonth = [31, 28 + Number(isLeapYear(year)), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
       
       // Суммируем дни до текущего месяца и добавляем дни текущего месяца
       return daysInMonth.slice(0, month - 1).reduce((acc, days) => acc + days, 0) + day;
   }

function getWeekNumber(year: number, month: number, day: number) {
  const currentDay = new Date(year, month - 1, day);
  const firstDayOfYear = new Date(year, 0, 1);
  const dayOfWeek = firstDayOfYear.getDay(); // 0 (Sunday) to 6 (Saturday)
  const adjustedDayOfWeek = (dayOfWeek === 0 ? 7 : dayOfWeek); // Adjusting Sunday (0) to 7
  const dayOfYear = Math.floor((currentDay.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)) + 1;

  const weekNumber = Math.ceil((dayOfYear + adjustedDayOfWeek - 1) / 7);

  return weekNumber;
}

   const year = data.year;
   const month = data.month;
   const day = data.day;
  //  console.log(dayOfYear(year, month, day))
   return (
       <>
       {isOpen && (
           <div className="mt-4 p-4 h-[400px] bg-[#FFFFFFBF] rounded-lg">
             <div className="flex justify-between">
               <div className="mt-[3rem] ml-[8rem]">
                 <p className="text-[15px] text-[#303030]">Current Timezone</p>
                 <p className="text-[56px] font-bold text-black">{data.timeZone}</p>
               </div>
               <div className="mt-[3rem] mr-[22rem]">
                 <p className="text-[15px] text-[#303030]">Day of the Week</p>
                 <p className="text-[56px] font-bold text-black">{data.dayOfWeek}</p>
               </div>
             </div>
             <div className="flex justify-between mt-4">
               <div className="mt-[3rem] ml-[8rem]">
                 <p className="text-[15px] text-[#303030]">Day of the Year</p>
                 <p className="text-[56px] font-bold text-black">{dayOfYear(year, month, day)}</p>
               </div>
               <div className="mt-[3rem] mr-[22rem]">
                 <p className="text-[15px] text-[#303030]">Week Number</p>
                 <p className="text-[56px] font-bold text-black">{getWeekNumber(year, month, day)}</p>
               </div>
             </div>
           </div>
         )}
       </>
   )
}

export default Info;
