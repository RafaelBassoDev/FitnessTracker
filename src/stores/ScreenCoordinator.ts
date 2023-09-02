import { Screen } from "$helpers/Screen";

export class ScreenCoordinator {
  private _currentScreen: Screen;

  constructor(initialScreen: Screen) {
    this._currentScreen = initialScreen;
  }
  get currentScreen(): Screen {
    return this._currentScreen;
  }

  set currentScreen(newValue: Screen) {
    this._currentScreen = newValue;
  }

  get availableScreens(): Screen[] {
    return [Screen.waterIntake, Screen.strech, Screen.history, Screen.settings];
  }
}
