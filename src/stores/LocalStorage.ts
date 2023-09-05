import { Preferences } from "@capacitor/preferences";
import { type Database } from "$helpers/Database";

class LocalStorage implements Database {
  async create(key: string, value: string) {
    await Preferences.set({ key, value });
  }

  async read(key: string) {
    return await Preferences.get({ key });
  }

  async update(key: string, value: string) {
    await Preferences.set({ key, value });
  }

  async delete(key: string) {
    await Preferences.remove({ key });
  }
}

export const localStorage = new LocalStorage();
