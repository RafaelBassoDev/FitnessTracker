<script lang="ts">
  import { clamp } from "$helpers/MathUtils";
  // Water wave effect
  // https://codepen.io/muhammad_mabrouk/pen/gOPNLyo

  /**
   * What is the current progress of the bar?
   *
   * This value is limited to numbers between 0 and 100.
   */
  export let progress = 0;

  $: height = clamp(Math.round(progress), 0, 100);
</script>

<div class="container">
  <div
    class="water-effect"
    style="height: {height}%;"
  >
    <div class="waves" />
    <div class="water" />
  </div>
</div>
