<script lang="ts">
  import { conditionsFailHandler, routeLoadingHandler, routes } from "./routes";
  import Router, { push } from "svelte-spa-router";
  import TabBar from "$components/TabBar/TabBar.svelte";
  import TabBarButton from "$components/TabBar/TabBarButton.svelte";

  import navbar_water_drop from "$assets/navbar/water-drop.svg";
  import navbar_walk from "$assets/navbar/walk.svg";
  import navbar_history from "$assets/navbar/history.svg";
  import navbar_settings from "$assets/navbar/settings.svg";
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
    <TabBarButton
      action={() => {
        push("/").catch((e) => {
          throw e;
        });
      }}
    >
      <img
        src={navbar_water_drop}
        alt="water intake"
      />
    </TabBarButton>
    <TabBarButton
      action={() => {
        push("/").catch((e) => {
          throw e;
        });
      }}
    >
      <img
        src={navbar_walk}
        alt="walk and strech"
      />
    </TabBarButton>
    <TabBarButton
      action={() => {
        push("/").catch((e) => {
          throw e;
        });
      }}
    >
      <img
        src={navbar_history}
        alt="history"
      />
    </TabBarButton>
    <TabBarButton
      action={() => {
        push("/settings").catch((e) => {
          throw e;
        });
      }}
    >
      <img
        src={navbar_settings}
        alt="settings"
      />
    </TabBarButton>
  </TabBar>
</footer>
