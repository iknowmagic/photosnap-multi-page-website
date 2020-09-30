<template>
  <div class="home">
    <div class="intro">
      <div class="intro-image">
        <img
          :src="require(`@/assets/images/home/${$mq}/create-and-share.jpg`)"
          alt="create and share"
        />
      </div>
      <div class="intro-text">
        <h1>Create and share your photo stories.</h1>
        <div class="intro-text-description">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </div>
        <button class="button-4 button-arrow-start">Get an Invite</button>
      </div>
    </div>
    <div class="view-the-stories-container">
      <view-the-stories-box>
        <template v-slot:image>
          <img
            :src="require(`@/assets/images/home/${$mq}/beautiful-stories.jpg`)"
            alt="beautiful storie"
          />
        </template>
        <template v-slot:title>Beautiful Stories Every Time</template>
        <template v-slot:info>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </template>
      </view-the-stories-box>
      <view-the-stories-box>
        <template v-slot:image>
          <img
            :src="
              require(`@/assets/images/home/${$mq}/designed-for-everyone.jpg`)
            "
            alt="beautiful storie"
          />
        </template>
        <template v-slot:title>Designed for Everyone</template>
        <template v-slot:info>
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </template>
      </view-the-stories-box>
    </div>
    <div class="read-story-container">
      <read-story
        title="The Mountains"
        author="John Appleseed"
        image="mountains.jpg"
      />
      <read-story
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
        image="cityscapes.jpg"
      />
      <read-story
        title="18 Days Voyage"
        author="Alexei Borodin"
        image="18-days-voyage.jpg"
      />
      <read-story
        title="Architecturals"
        author="Samantha Brooke"
        image="architecturals.jpg"
      />
    </div>
  </div>
</template>

<script>
// @flow

import ViewTheStoriesBox from '@/components/ViewTheStoriesBox'
import ReadStory from '@/components/ReadStory'

export default {
  name: 'Home',
  components: {
    ViewTheStoriesBox,
    ReadStory
  },
  methods: {
    getImage(image: string) {
      let result
      try {
        result = require(`@/assets/images/stories/${this.$mq}/${image}`)
      } catch {
        result = require(`@/assets/images/stories/desktop/${image}`)
      }
      return result
    }
  }
}
</script>
