import {
  LocalNotifications,
  type ScheduleOptions,
} from "@capacitor/local-notifications";

class NotificationCenter {
  async scheduleOptions() {
    const options: ScheduleOptions = {
      notifications: [
        {
          id: 111,
          title: "Notification",
          body: "body",
          largeBody: "Large body",
          summaryText: "sumarry text",
        },
      ],
    };

    try {
      await LocalNotifications.schedule(options);
    } catch (error) {
      alert(error);
    }
  }

  async checkNotificationPermission() {
    const aoba = await LocalNotifications.requestPermissions();
    alert(aoba.display);
  }
}

export const notificationCenter = new NotificationCenter();
