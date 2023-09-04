import { Screen } from "$helpers/Screen";
import { push } from "svelte-spa-router";

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

  pushScreen(newScreen: Screen) {
    push(`/${newScreen}`).catch((e) => {
      throw e;
    });
  }

  getImagePathFor(screen: Screen): string {
    return `assets/navbar/${screen}.svg`;
  }
}
