<script lang="ts">
  import NumberInput from "$components/NumberInput/NumberInput.svelte";
  import WaterProgressBar from "$components/WaterProgressBar/WaterProgressBar.svelte";
  import { intakeManager } from "$stores/IntakeManager";

  let numberInputValue = 0;

  $: progressBarHeight = Math.round(
    (intakeManager.currentIntakeVolume / intakeManager.dailyVolume) * 100
  );
</script>

<div class="container">
  <div class="info-display">
    <div class="primary">{intakeManager.currentIntakeVolume}</div>
    <div class="secondary">DE</div>
    <div class="primary">
      {intakeManager.dailyVolume}<span class="detail">ml</span>
    </div>
  </div>
  <div class="input-container">
    <NumberInput
      bind:value={numberInputValue}
      width="200"
    />
    <button
      class="add-button"
      on:click={() => {
        if (numberInputValue !== null && !isNaN(numberInputValue)) {
          intakeManager.currentIntakeVolume += Number(numberInputValue);
        }
      }}>Beber Água</button
    >
  </div>
  <WaterProgressBar progress={progressBarHeight} />
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
