<template>
  <div :class="['view-the-stories-box', { invert }]">
    <div class="view-the-stories-image">
      <slot name="image" />
    </div>
    <div class="view-the-stories-text">
      <h2>
        <slot name="title" />
      </h2>
      <div class="view-the-stories-info">
        <slot name="info" />
      </div>
      <button class="button-2 button-arrow-start">View The Stories</button>
    </div>
  </div>
</template>

<script>
// @flow

export default {
  name: 'ViewTheStoriesBox',
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  }
}
</script>
