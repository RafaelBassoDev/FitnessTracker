class Time {
  hour: number;
  minutes: number;

  constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minutes = minute;
  }

  totalMinutes(): number {
    return this.hour * 60 + this.minutes;
  }

  durationBetween(time: Time) {
    return Math.abs(this.totalMinutes() - time.totalMinutes());
  }
}

export const createTime = (hour: number, minutes: number) =>
  new Time(hour, minutes);
