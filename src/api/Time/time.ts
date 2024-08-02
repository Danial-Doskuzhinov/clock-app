export interface TimeData {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

export default async function fetchData(): Promise<TimeData | null> {
  try {
    const response = await fetch('https://proxy-git-main-danials-projects-6a755245.vercel.app/api/proxy?url=https://timeapi.io/api/Time/current/zone?timeZone=Asia/Almaty', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TimeData = await response.json();
    return data;  // Возвращаем данные
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;  // Возвращаем null в случае ошибки
  }
}
