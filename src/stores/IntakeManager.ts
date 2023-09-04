import { userSettings } from "$stores/UserSettings";
import { get } from "svelte/store";

class IntakeManager {
  private _currentConsumedVolume: number;

  constructor() {
    this._currentConsumedVolume = 0;
  }

  public get currentIntakeVolume(): number {
    return this._currentConsumedVolume;
  }

  public set currentIntakeVolume(volume: number) {
    if (isNaN(volume)) {
      return;
    }

    this._currentConsumedVolume = volume;
  }

  public get dailyVolume(): number {
    return get(userSettings.dailyVolume);
  }
}

export const intakeManager = new IntakeManager();
