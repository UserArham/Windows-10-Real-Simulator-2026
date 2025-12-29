<script lang="ts">
  export let name: string;
  export let color: string;
  export let update: string;
  let flipped = false;

  setInterval(() => { flipped = !flipped; }, 4000);
</script>

<div class="tile" style="background: {color}" class:flipped>
  <div class="face front">{name}</div>
  <div class="face back">{update}</div>
</div>

<style lang="scss">
  .tile {
    width: 120px; height: 120px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;
    &.flipped { transform: rotateX(180deg); }
    .face {
      position: absolute; width: 100%; height: 100%;
      backface-visibility: hidden; display: flex;
      align-items: flex-end; padding: 10px; font-size: 13px; color: white;
    }
    .back { transform: rotateX(180deg); background: rgba(0,0,0,0.2); }
  }
</style>
