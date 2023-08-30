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
