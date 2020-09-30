<template>
  <div class="read-story" :style="`background-image: url(${currImage})`">
    <div class="read-story-title">
      {{ title }}
    </div>
    <div class="read-story-author">by {{ author }}</div>

    <div class="line"></div>

    <button class="button-4 button-wide">Read Story</button>
  </div>
</template>

<script>
// @flow

export default {
  name: 'ReadStory',
  props: {
    title: {
      type: String,
      default: undefined
    },
    author: {
      type: String,
      default: undefined
    },
    image: {
      type: String,
      default: undefined
    }
  },
  computed: {
    currImage() {
      let result
      try {
        result = require(`@/assets/images/stories/${this.$mq}/${this.image}`)
      } catch {
        result = require(`@/assets/images/stories/desktop/${this.image}`)
      }

      return result
    }
  }
}
</script>
