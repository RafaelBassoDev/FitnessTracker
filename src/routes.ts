import History from "$pages/History/History.svelte";
import NotAuthorized from "$pages/NotAuthorized/NotAuthorized.svelte";
import NotFound from "$pages/NotFound/NotFound.svelte";
import Settings from "$pages/Settings/Settings.svelte";
import Stretch from "$pages/Stretch/Stretch.svelte";
import WaterIntake from "$pages/WaterIntake/WaterIntake.svelte";
import {
  type ConditionsFailedEvent,
  type RouteLoadingEvent,
  replace,
} from "svelte-spa-router";
import { wrap } from "svelte-spa-router/wrap";

export const routes = new Map();

routes.set(
  "/",
  wrap({
    component: WaterIntake,
  })
);
routes.set(
  "/water-intake",
  wrap({
    component: WaterIntake,
  })
);
routes.set(
  "/stretch",
  wrap({
    component: Stretch,
  })
);
routes.set(
  "/history",
  wrap({
    component: History,
  })
);
routes.set(
  "/settings",
  wrap({
    component: Settings,
  })
);
routes.set(
  "/not-authorized",
  wrap({
    component: NotAuthorized,
  })
);
routes.set(
  "*",
  wrap({
    component: NotFound,
  })
);

export function routeLoadingHandler({ detail }: RouteLoadingEvent): void {
  // If not hash based, redirect to hash based path
  if (!window.location.hash.startsWith("#/")) {
    // Save query string
    const { search } = window.location;

    // Remove any paths and querystrings
    window.history.replaceState(
      null,
      "",
      `${window.location.origin}${window.location.pathname}`
    );

    // Go to location with querystring
    replace(detail.location + search).catch((e) => {
      throw e;
    });
  }
}

/**
 * On some condition fail this function will be triggered, performing routes change
 */
export async function conditionsFailHandler(
  event: ConditionsFailedEvent
): Promise<void> {
  const { route } = event.detail;
  await replace(`/not-authorized?route=${route as string}`);
}
