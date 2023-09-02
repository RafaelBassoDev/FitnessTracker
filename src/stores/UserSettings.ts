import { get, writable, type Writable } from "svelte/store";
import { Volume } from "$helpers/Volume";
import Time from "$helpers/Time";

class UserSettings {
  private readonly volumePercentages = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];

  constructor(
    private wakeUpTime: Time = new Time(8, 0),
    private sleepTime: Time = new Time(22, 0),
    public enableNotifications: Writable<boolean> = writable(true),
    public dailyVolume: Writable<number> = writable(2900),
    public minDailyVolume: Writable<number> = writable(100),
    public maxDailyVolume: Writable<number> = writable(6000),
    public isAutomaticVolumeEnabled: Writable<boolean> = writable(true),
    public selectedVolume: Writable<number | null> = writable(0)
  ) {}

  getAvailableVolumes(): Volume[] {
    const volumes: Volume[] = [];
    const currentDailyVolume = get(this.dailyVolume);

    this.volumePercentages.forEach((volume) => {
      const percentage = volume / 100;
      volumes.push(new Volume(currentDailyVolume * percentage, `${volume}%`));
    });

    return volumes;
  }

  getFormattedWakeUpTime(): string {
    return this.wakeUpTime.getFomattedTime();
  }

  setFormattedWakeUpTime(newTime: string) {
    this.wakeUpTime.setTime(newTime);
  }

  getFormattedSleepTime(): string {
    return this.sleepTime.getFomattedTime();
  }

  setFormattedSleepTime(newTime: string) {
    this.sleepTime.setTime(newTime);
  }
}

export const userSettings = new UserSettings();
