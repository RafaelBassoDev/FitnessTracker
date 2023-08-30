<script lang="ts">
  import SettingsGroup from "./SettingsGroup.svelte";
  import SettingsGroupRow from "./SettingsGroupRow.svelte";
</script>

<div class="container">
  <SettingsGroup title="Horários">
    <SettingsGroupRow label="Acordar" />
    <SettingsGroupRow label="Dormir" />
    <SettingsGroupRow label="Ativar Notificações" />
  </SettingsGroup>

  <SettingsGroup title="Geral">
    <SettingsGroupRow label="Ingestão Diária" />
    <SettingsGroupRow label="Utilizar Volume Sugerido por Lembrete" />
    <SettingsGroupRow label="Volume por Lembrete" />
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
