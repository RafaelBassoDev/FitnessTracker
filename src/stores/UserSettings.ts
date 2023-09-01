import { get, writable, type Writable } from "svelte/store";
import { createVolume } from "$helpers/Volume";

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

  get availableVolumes() {
    return [
      createVolume(150, "Copo Pequeno"),
      createVolume(200, "Copo Médio"),
      createVolume(240, "Xícara"),
      createVolume(500, "Garrafa d'água"),
    ];
  }
}

export const userSettings = new UserSettings();
