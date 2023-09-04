<script lang="ts">
  import { clamp } from "$helpers/MathUtils";
  import { createEventDispatcher } from "svelte";

  /**
   * The input binding value.
   */
  export let value = 0;

  /**
   * What is the minimum value accepted by the input?
   */
  export let min = 0;

  /**
   * What is the maximum value accepted by the input?
   */
  export let max = Number.MAX_SAFE_INTEGER;

  /**
   * The element's width in pixels.
   */
  export let width = "50";

  /**
   * The element's height in pixels.
   */
  export let height = "25";

  const dispatcher = createEventDispatcher<{
    change: undefined;
  }>();

  function onChangeEvent() {
    dispatcher("change");
  }
</script>

<input
  class="input"
  type="number"
  style="--width:{width}; --height:{height};"
  bind:value
  {min}
  {max}
  on:change={() => {
    onChangeEvent;
    value = clamp(value, min, max);
  }}
/>

<style lang="scss">
  .input {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    height: 2em;
    width: calc(var(--width) * 1px);
    height: calc(var(--height) * 1px);
    border-radius: 6px;
  }
</style>
