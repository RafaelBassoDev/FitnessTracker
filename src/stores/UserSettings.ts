import { writable, type Writable } from "svelte/store";
import { Volume } from "$helpers/Volume";
import Time from "$helpers/Time";

class UserSettings {
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

  get availableVolumes() {
    return [
      new Volume(150, "Copo Pequeno"),
      new Volume(150, "Copo Médio"),
      new Volume(150, "Xícara"),
      new Volume(150, "Garrafa d'água"),
    ];
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
