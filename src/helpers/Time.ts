class Time {
  hour: number;
  minutes: number;

  constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minutes = minute;
  }
}

export const createTime = (hour: number, minutes: number) =>
  new Time(hour, minutes);
