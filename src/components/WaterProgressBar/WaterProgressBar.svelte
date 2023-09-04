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

  /**
   * The z-index of the component.
   *
   * Default value is -1.
   */
  export let zIndex = -1;

  $: height = clamp(Math.round(progress), 0, 100);
</script>

<div
  class="container"
  style="z-index: {zIndex};"
>
  <div
    class="water-effect"
    style="height: {height}%;"
  >
    <div class="waves" />
    <div class="water" />
  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;

    .water-effect {
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      max-height: 100%;
      animation: stretch ease-in-out;
      transition: all 1s ease-out;
    }

    .waves {
      height: 100px;
      background-color: #03a9f4;
      animation: waves 5s ease-in-out infinite;
    }

    .water {
      height: calc(100% - 100px);
      margin-top: -1px;
      background-color: #03a9f4;
    }

    @keyframes waves {
      0%,
      100% {
        clip-path: polygon(
          0 8%,
          7% 6%,
          14% 5%,
          21% 5%,
          28% 6%,
          34% 8%,
          40% 12%,
          46% 17%,
          50% 20%,
          54% 23%,
          60% 25%,
          66% 26%,
          70% 26%,
          77% 25%,
          83% 23%,
          89% 21%,
          95% 19%,
          100% 17%,
          100% 100%,
          0% 100%
        );
      }

      50% {
        clip-path: polygon(
          0 15%,
          9% 21%,
          14% 23%,
          18% 25%,
          21% 26%,
          30% 28%,
          32% 28%,
          40% 27%,
          46% 26%,
          52% 23%,
          57% 19%,
          62% 15%,
          68% 11%,
          73% 8%,
          79% 6%,
          86% 5%,
          93% 5%,
          100% 6%,
          100% 100%,
          0% 100%
        );
      }
    }

    @keyframes stretch {
      0% {
        bottom: -130%;
      }

      100% {
        bottom: -1px;
      }
    }
  }
</style>
