import { useState, useEffect, useRef } from "react";
import { differenceInSeconds, parseISO } from "date-fns";

export const useTimer = (
  expAt: Date | string,
  isComplete: boolean,
  onTimeOut: () => void
) => {
  const calculateTimeLeft = () => {
    if (isComplete) return 0;
    return Math.max(
      differenceInSeconds(
        typeof expAt === "string" ? parseISO(expAt) : expAt,
        new Date()
      ),
      0
    );
  };

  const [time, setTime] = useState(calculateTimeLeft());
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (time <= 0) return;

    intervalRef.current = window.setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          onTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [time, onTimeOut]);

  return time;
};
