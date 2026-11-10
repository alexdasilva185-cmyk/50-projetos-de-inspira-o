import { useState, useEffect } from 'react';

export interface MidnightTimerData {
  formattedDate: string;          // Ex: "9 de novembro"
  formattedWeekdayDate: string;   // Ex: "segunda-feira, 9 de novembro"
  formattedShortDate: string;     // Ex: "09/11"
  formattedDateFullNumeric: string; // Ex: "09/11/2026"
  hours: string;
  minutes: string;
  seconds: string;
  currentDateObj: Date;
  advanceDayForDemo: () => void;
  resetToRealDate: () => void;
  isSimulatedDay: boolean;
}

export function useMidnightTimer(): MidnightTimerData {
  // Allow offset in days for demo/testing purposes
  const [dayOffset, setDayOffset] = useState<number>(0);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Compute effective date (real now + dayOffset in days)
  const effectiveDate = new Date(now.getTime() + dayOffset * 86400000);

  // Target is midnight (23:59:59.999) of effectiveDate
  const midnight = new Date(effectiveDate);
  midnight.setHours(23, 59, 59, 999);

  const diffMs = Math.max(0, midnight.getTime() - effectiveDate.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  const day = effectiveDate.getDate();
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  const weekdays = [
    'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
    'quinta-feira', 'sexta-feira', 'sábado'
  ];

  const monthName = months[effectiveDate.getMonth()];
  const weekdayName = weekdays[effectiveDate.getDay()];

  const advanceDayForDemo = () => {
    setDayOffset((prev) => prev + 1);
  };

  const resetToRealDate = () => {
    setDayOffset(0);
  };

  const year = effectiveDate.getFullYear();
  const formattedDateFullNumeric = `${pad(day)}/${pad(effectiveDate.getMonth() + 1)}/${year}`;

  return {
    formattedDate: `${day} de ${monthName}`,
    formattedWeekdayDate: `${weekdayName}, ${day} de ${monthName}`,
    formattedShortDate: `${pad(day)}/${pad(effectiveDate.getMonth() + 1)}`,
    formattedDateFullNumeric,
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    currentDateObj: effectiveDate,
    advanceDayForDemo,
    resetToRealDate,
    isSimulatedDay: dayOffset !== 0,
  };
}
