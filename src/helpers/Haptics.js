import { Haptics, ImpactStyle } from "@capacitor/haptics";

export const hapticsImpactLight = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
};
