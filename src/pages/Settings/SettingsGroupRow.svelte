<script lang="ts">
  /**
   * Defines the row label.
   */
  export let label: string;

  /**
   * Should the row be disabled?
   */
  export let disabled = false;
</script>

<div
  class="settings-group-row"
  class:disabled
>
  <span class="row-label">{label}</span>
  <slot />
</div>

<style lang="scss">
  .settings-group-row {
    display: flex;
    align-items: center;
    padding: 0.3em 0;
    margin: 10px 0;
  }

  .row-label {
    font-size: 16px;
    flex: 1;
  }

  .disabled {
    opacity: 0.4;
  }
</style>
