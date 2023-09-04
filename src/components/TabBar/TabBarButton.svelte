<script lang="ts">
  import { hapticsImpactLight } from "$helpers/Haptics";
  /**
   * Defines what action the button will perform when `on:click` is called.
   */
  export let action: (() => void) | null = null;

  export let isSelected = false;
</script>

<button
  class="tab-button"
  class:isSelected
  on:click={() => {
    action();
    hapticsImpactLight;
  }}
>
  <slot />
</button>

<style lang="scss">
  .tab-button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    border-radius: 12px;
  }

  .isSelected {
    background-color: rgb(210, 210, 210);
  }
</style>
