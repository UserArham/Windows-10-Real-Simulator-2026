<script lang="ts">
  export let name: string;
  export let color: string;
  export let update: string;
  let flipped = false;

  // Authentic 2014 Metro Flip interval
  setInterval(() => { flipped = !flipped; }, 4000 + Math.random() * 2000);
</script>

<div class="tile" style="background: {color}" class:flipped on:click>
  <div class="face front">
    <span class="app-name">{name}</span>
  </div>
  <div class="face back">
    <p class="update-text">{update}</p>
    <span class="app-name-mini">{name}</span>
  </div>
</div>

<style lang="scss">
  .tile {
    width: 110px; height: 110px; perspective: 1000px;
    transform-style: preserve-3d; transition: transform 0.6s ease;
    cursor: pointer; position: relative;
    &.flipped { transform: rotateX(180deg); }
    &:hover { outline: 2px solid rgba(255,255,255,0.3); }
    .face {
      position: absolute; width: 100%; height: 100%;
      backface-visibility: hidden; display: flex; flex-direction: column;
      justify-content: flex-end; padding: 10px; color: white;
      .app-name { font-size: 13px; font-weight: 400; }
    }
    .back { transform: rotateX(180deg); background: rgba(0,0,0,0.2); 
      .update-text { font-size: 11px; margin-bottom: 20px; }
      .app-name-mini { font-size: 10px; opacity: 0.8; }
    }
  }
</style>

