<script lang="ts">
  /**
   * Defines the group title.
   *
   * If no value is passed, the group will work nonetheless but without a title.
   */
  export let title: string = undefined;
</script>

<div class="settings-group">
  {#if title !== undefined}
    <h1 class="group-title">{title}</h1>
  {/if}
  <div class="group-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .settings-group {
    margin-top: 1em;
    padding: 0 1em;
    border-radius: 10px;
  }

  .group-title {
    font-size: 16px;
    margin: 0 0 2px 1em;
    padding-bottom: 5px;
    color: #a2a1a7;
  }

  .group-content {
    background-color: white;
    padding: 2px 1em;
    border-radius: 10px;
  }
</style>
