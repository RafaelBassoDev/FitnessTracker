<script lang="ts">
  import { stretchManager } from "$stores/StretchManager";
</script>

<div class="container">
  <div class="info-display">
    <div class="primary">PAUSAS</div>
    <div class="secondary">{stretchManager.currentStretchCount}</div>
  </div>
  <div class="input-container">
    <button
      class="add-button"
      on:click={() => {
        stretchManager.currentStretchCount++;
      }}
    >
      +
    </button>
  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Verdana;
    gap: 15em;
    height: 100%;
  }

  .info-display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    gap: 10px;

    .primary {
      font-size: 36px;
    }

    .secondary {
      font-size: 30px;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 2em;
    font-size: 26px;
    border-radius: 12px;
    padding: 1em;
    font-weight: bold;
    background-color: #007aff;
    color: white;
  }
</style>
