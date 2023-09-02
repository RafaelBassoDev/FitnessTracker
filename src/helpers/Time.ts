export default class Time {
  private hour: number;
  private minutes: number;

  constructor(hour: number, minutes: number) {
    this.hour = hour;
    this.minutes = minutes;
  }

  public setTime(unformattedTime: string) {
    const formattedTime = unformattedTime.split(":");
    this.hour = Number(formattedTime[0]);
    this.minutes = Number(formattedTime[1]);
  }

  public getFomattedTime(): string {
    const formattedHour = this.hour.toString().padStart(2, "0");
    const formattedMinutes = this.minutes.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinutes}`;
  }

  public getTotalMinutes(): number {
    return this.hour * 60 + this.minutes;
  }

  public durationBetween(time: Time) {
    return Math.abs(this.getTotalMinutes() - time.getTotalMinutes());
  }
}
