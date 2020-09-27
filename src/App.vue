<template>
  <div class="main-container">
    <div class="main-header"></div>
    <div class="main-body">
      <router-view />
    </div>

    <div class="main-footer"></div>

    <mobile-menu />
  </div>
</template>

<script>
// @flow

// import MobileMenu from '@/components/MobileMenu'

export default {
  name: 'App'
  // components: { MobileMenu }
}
</script>
