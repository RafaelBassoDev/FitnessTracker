<script lang="ts">
  /**
   * Defines what action the button will perform when `on:click` is called.
   */
  export let action: (() => void) | null = null;
</script>

<button
  class="tab-button"
  on:click={action}
>
  <slot />
</button>

<style lang="scss">
  .tab-button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    padding: 10px;
    margin: 0 5px;
  }
</style>
