<template>
  <div class="new_in">
    <br />
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .new_in {
    min-height: 100vh;
  }
}
</style>
