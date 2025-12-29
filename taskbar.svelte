<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<nav class="taskbar">
  <div class="start-btn" on:click={() => dispatch('toggleStart')}>⊞</div>
  <div class="icon search">🔍</div>
  <div class="icon task-view">❐</div>
  <div class="spacer"></div>
  <div class="tray">12:00 PM</div>
</nav>

<style>
  .taskbar { display: flex; align-items: center; width: 100vw; position: fixed; bottom: 0; }
  .start-btn { width: 48px; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; }
  .start-btn:hover { background: rgba(255,255,255,0.15); }
  .icon { padding: 0 15px; opacity: 0.8; cursor: pointer; }
  .spacer { flex-grow: 1; }
  .tray { padding-right: 15px; font-size: 12px; }
</style>
