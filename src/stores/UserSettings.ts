import { writable, type Writable } from "svelte/store";

class UserSettings {
  constructor(
    public startHour: Writable<string> = writable("08:00"),
    public endHour: Writable<string> = writable("23:00"),
    public enableNotifications: Writable<boolean> = writable(true),
    public dailyVolume: Writable<number> = writable(2900),
    public minDailyVolume: Writable<number> = writable(100),
    public maxDailyVolume: Writable<number> = writable(6000),
    public isAutomaticVolumeEnabled: Writable<boolean> = writable(true),
    public selectedVolume: Writable<number | null> = writable(0)
  ) {}

  get availableVolumes(): number[] {
    return [100, 200, 300, 400];
  }
}

export const userSettings = new UserSettings();
