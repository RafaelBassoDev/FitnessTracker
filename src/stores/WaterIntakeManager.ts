class WaterIntakeManager {
  private _totalConsumedWaterVolume: number;

  public get currentIntakeVolume(): number {
    return this._totalConsumedWaterVolume;
  }

  public set currentIntakeVolume(volume: number) {
    if (isNaN(volume)) {
      return;
    }

    this._totalConsumedWaterVolume = volume;
  }
}

export const waterIntakeManager = new WaterIntakeManager();
