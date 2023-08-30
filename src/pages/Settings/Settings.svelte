<script lang="ts">
  import { clamp } from "$helpers/MathUtils";
  import SettingsGroup from "./SettingsGroup.svelte";
  import SettingsGroupRow from "./SettingsGroupRow.svelte";

  let startHour = "08:00";
  let endHour = "22:00";
  let enableNotifications = true;

  let dailyVolume = 3200;
  let minDailyVolume = 100;
  let maxDailyVolume = 6000;

  let isAutomaticVolumeEnabled = false;
  let selectedVolume: number | null;
  let availableVolumes = [210, 330, 450, 640];
</script>

<div class="container">
  <SettingsGroup title="Horários">
    <SettingsGroupRow label="Acordar">
      <input
        type="time"
        min="00"
        max="24"
        bind:value={startHour}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Dormir">
      <input
        type="time"
        min="00"
        max="24"
        bind:value={endHour}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Ativar Notificações">
      <input
        type="checkbox"
        bind:checked={enableNotifications}
      />
    </SettingsGroupRow>
  </SettingsGroup>

  <SettingsGroup title="Geral">
    <SettingsGroupRow label="Ingestão Diária">
      <input
        type="number"
        bind:value={dailyVolume}
        min={minDailyVolume}
        max={maxDailyVolume}
        on:change={() => {
          dailyVolume = clamp(dailyVolume, minDailyVolume, maxDailyVolume);
        }}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Utilizar Volume Sugerido por Lembrete">
      <input
        type="checkbox"
        bind:checked={isAutomaticVolumeEnabled}
        on:change={() => {
          selectedVolume = null;
        }}
      />
    </SettingsGroupRow>
    <SettingsGroupRow
      label="Volume por Lembrete"
      disabled={isAutomaticVolumeEnabled}
    >
      <select
        bind:value={selectedVolume}
        disabled={isAutomaticVolumeEnabled}
      >
        {#each availableVolumes as volume}
          <option value={volume}>{volume}</option>
        {/each}
      </select>
    </SettingsGroupRow>
  </SettingsGroup>
</div>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2.5em 0 0 0;
    font-family: Verdana;
    background-color: #f2f1f6;
  }
</style>
