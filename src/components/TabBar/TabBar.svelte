<div class="tab-bar">
  <div class="tab-bar-content">
    <button class="tab-button">History</button>
    <button class="tab-button">Home</button>
    <button class="tab-button">Settings</button>
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

  .tab-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    margin: 0 5px;
    transition: background-color 0.3s ease;
  }

  .tab-button:hover {
    background-color: #ddd;
  }
</style>
