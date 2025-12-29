import { useEffect } from "react";
import ScheduleTemplate from "../src/Schedule/template";
import "../src/Schedule/styles.css";
import { InitSchedule, CleanupSchedule } from "../src/Schedule/behavior";

export default function Schedule() {
  useEffect(() => {
    InitSchedule();
    return () => CleanupSchedule();
  }, []);

  return <ScheduleTemplate />;
}
