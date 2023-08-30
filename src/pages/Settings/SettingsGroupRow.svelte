<script lang="ts">
  /**
   * Defines the row label.
   */
  export let label: string;
</script>

<div class="settings-group-row">
  <span class="row-label">{label}</span>
  <slot />
</div>

<style lang="scss">
  .settings-group-row {
    display: flex;
    align-items: center;
    padding: 0.3em 0;
    margin: 8px 0;
  }

  .row-label {
    font-size: 16px;
    flex: 1;
  }
</style>
