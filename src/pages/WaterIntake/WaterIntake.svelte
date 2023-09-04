<script lang="ts">
  import NumberInput from "$components/NumberInput/NumberInput.svelte";
  import { userSettings } from "$stores/UserSettings";
  import { get } from "svelte/store";

  let totalIntakeVolume = get(userSettings.dailyVolume);

  let currentWaterQnt = 0;
</script>

<div class="container">
  <div class="info-display">
    <div class="primary">{currentWaterQnt}</div>
    <div class="secondary">DE</div>
    <div class="primary">{totalIntakeVolume}<span class="detail">ml</span></div>
  </div>
  <div class="input-container">
    <NumberInput
      bind:value={currentWaterQnt}
      width="200"
    />
    <button
      class="add-button"
      on:click={() => {
        // somar agua
      }}>Beber Água</button
    >
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
    height: 100vh;
    background-color: transparent;
    overflow: hidden;
  }

  .info-display {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;

    .primary {
      font-size: 36px;
    }

    .secondary {
      font-size: 20px;
      margin: 0 10px;
    }

    .detail {
      font-size: 28px;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .add-button {
    background-color: #007aff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 12px;
    padding: 1em;
    font-weight: bold;
  }
</style>
