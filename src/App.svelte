<script lang="ts">
  import { conditionsFailHandler, routeLoadingHandler, routes } from "./routes";
  import Router from "svelte-spa-router";
  import TabBar from "$components/TabBar/TabBar.svelte";
</script>

<main>
  <Router
    {routes}
    on:routeLoading={routeLoadingHandler}
    on:conditionsFailed={conditionsFailHandler}
  />
</main>
<footer>
  <TabBar />
</footer>
