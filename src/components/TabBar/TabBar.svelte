<div class="tab-bar">
  <div class="tab-bar-content">
    <slot />
  </div>
</div>

<style>
  .tab-bar {
    display: flex;
    justify-content: center;
    background-color: transparent;
    margin: 0;
    position: fixed;
    padding-bottom: 1.8em;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
  }

  .tab-bar-content {
    display: flex;
    gap: 30px;
  }
</style>
