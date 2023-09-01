<script lang="ts">
  import { clamp } from "$helpers/MathUtils";
  import { userSettings } from "$stores/UserSettings";
  import { writable } from "svelte/store";
  import { onDestroy } from "svelte";
  import SettingsGroup from "./SettingsGroup.svelte";
  import SettingsGroupRow from "./SettingsGroupRow.svelte";

  const {
    enableNotifications,
    dailyVolume,
    minDailyVolume,
    maxDailyVolume,
    isAutomaticVolumeEnabled,
    selectedVolume,
    availableVolumes,
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
      <input
        type="number"
        bind:value={$dailyVolume}
        min={$minDailyVolume}
        max={$maxDailyVolume}
        on:change={() => {
          $dailyVolume = clamp($dailyVolume, $minDailyVolume, $maxDailyVolume);
        }}
      />
    </SettingsGroupRow>
    <SettingsGroupRow label="Utilizar Volume Sugerido por Lembrete">
      <input
        type="checkbox"
        bind:checked={$isAutomaticVolumeEnabled}
        on:change={() => {
          if ($isAutomaticVolumeEnabled) {
            $selectedVolume = null;
          } else {
            $selectedVolume = availableVolumes[0].value;
          }
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
        {#each availableVolumes as volume}
          <option value={volume.value}
            >{volume.value}ml {volume.description}</option
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
</style>
