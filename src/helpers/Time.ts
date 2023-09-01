export default class Time {
  private hour: number;
  private minutes: number;

  constructor(hour: number, minutes: number) {
    this.hour = hour;
    this.minutes = minutes;
  }

  public getTotalMinutes(): number {
    return this.hour * 60 + this.minutes;
  }

  public durationBetween(time: Time) {
    return Math.abs(this.getTotalMinutes() - time.getTotalMinutes());
  }
}
