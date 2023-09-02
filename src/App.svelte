<script lang="ts">
  import { conditionsFailHandler, routeLoadingHandler, routes } from "./routes";
  import Router from "svelte-spa-router";
  import TabBar from "$components/TabBar/TabBar.svelte";
  import TabBarButton from "$components/TabBar/TabBarButton.svelte";
  import { ScreenCoordinator } from "$stores/ScreenCoordinator";
  import { Screen } from "$helpers/Screen";

  const coordinator = new ScreenCoordinator(Screen.waterIntake);
</script>

<main>
  <Router
    {routes}
    on:routeLoading={routeLoadingHandler}
    on:conditionsFailed={conditionsFailHandler}
  />
</main>
<footer>
  <TabBar>
    {#each coordinator.availableScreens as screen}
      <TabBarButton
        action={() => {
          coordinator.pushScreen(screen);
          coordinator.currentScreen = screen;
        }}
        isSelected={coordinator.currentScreen === screen}
      >
        <img
          src={coordinator.getImagePathFor(screen)}
          alt={screen}
        />
      </TabBarButton>
    {/each}
  </TabBar>
</footer>
