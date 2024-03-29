<script lang="ts">
  import { userSettings } from "$stores/UserSettings";
  import { writable } from "svelte/store";
  import { onDestroy } from "svelte";
  import SettingsGroup from "./SettingsGroup.svelte";
  import SettingsGroupRow from "./SettingsGroupRow.svelte";
  import NumberInput from "$components/NumberInput/NumberInput.svelte";

  const {
    enableNotifications,
    dailyVolume,
    minDailyVolume,
    maxDailyVolume,
    isAutomaticVolumeEnabled,
    selectedVolume,
  } = userSettings;

  let wakeUpTime = writable(userSettings.getFormattedWakeUpTime());
  const unsubscribeWakeUpTime = wakeUpTime.subscribe(() => {
    userSettings.setFormattedWakeUpTime($wakeUpTime);
  });

  let sleepTime = writable(userSettings.getFormattedSleepTime());
  const unsubscribeSleepTime = sleepTime.subscribe(() => {
    userSettings.setFormattedSleepTime($sleepTime);
  });

  onDestroy(() => {
    unsubscribeWakeUpTime;
    unsubscribeSleepTime;
  });
</script>

<div class="container">
  <h1 class="title">Ajustes</h1>
  <SettingsGroup title="Horários">
    <SettingsGroupRow label="Acordar">
      <input
        type="time"
        min="00"
        max="24"
        bind:value={$wakeUpTime}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Dormir">
      <input
        type="time"
        min="00"
        max="24"
        bind:value={$sleepTime}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Ativar Notificações">
      <input
        type="checkbox"
        bind:checked={$enableNotifications}
      />
    </SettingsGroupRow>
  </SettingsGroup>

  <SettingsGroup title="Geral">
    <SettingsGroupRow label="Ingestão Diária">
      <NumberInput
        bind:value={$dailyVolume}
        width="50"
        height="5"
        min={minDailyVolume}
        max={maxDailyVolume}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Utilizar Volume Sugerido por Lembrete">
      <input
        type="checkbox"
        bind:checked={$isAutomaticVolumeEnabled}
        on:change={() => {
          userSettings.toggleAutomaticVolume();
        }}
      />
    </SettingsGroupRow>
    <SettingsGroupRow
      label="Volume por Lembrete"
      disabled={$isAutomaticVolumeEnabled}
    >
      <select
        bind:value={$selectedVolume}
        disabled={$isAutomaticVolumeEnabled}
      >
        {#each userSettings.getAvailableVolumes() as volume}
          <option value={volume.value}
            >{volume.value}ml ({volume.description})</option
          >
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

  .title {
    text-align: left;
    padding: 0 0.8em;
    color: black;
  }
</style>
