class StretchManager {
  private _currentStretchCount: number;

  constructor() {
    this._currentStretchCount = 0;
  }

  public get currentStretchCount(): number {
    return this._currentStretchCount;
  }

  public set currentStretchCount(volume: number) {
    if (isNaN(volume)) {
      return;
    }

    this._currentStretchCount = volume;
  }
}

export const stretchManager = new StretchManager();
