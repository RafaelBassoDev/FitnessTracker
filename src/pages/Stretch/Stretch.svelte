<script lang="ts">
  let count = 0;
</script>

<div class="container">
  <div class="info-display">
    <div class="primary">PAUSAS</div>
    <div class="secondary">{count}</div>
  </div>
  <div class="input-container">
    <button
      class="add-button"
      on:click={() => {
        count++;
      }}
    >
      +
    </button>
  </div>
</div>
