<div class="tab-bar">
  <div class="tab-bar-content">
    <slot />
  </div>
</div>

<style>
  .tab-bar {
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    margin: 0;
    position: fixed;
    padding-bottom: 1em;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  }

  .tab-bar-content {
    display: flex;
    gap: 50px;
  }
</style>
