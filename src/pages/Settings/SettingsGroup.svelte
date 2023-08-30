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
</div>
