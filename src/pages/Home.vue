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
        <button class="button-4">Get an Invite</button>
      </div>
    </div>
  </div>
</template>

<script>
// @flow

export default {
  name: 'Home'
}
</script>
