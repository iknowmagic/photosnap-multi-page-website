<template>
  <div class="main-container">
    <div class="main-header">
      <div class="main-logo">
        <img src="@/assets/images/shared/desktop/logo.svg" alt="logo" />
      </div>
      <div v-if="$mq === 'mobile'" class="main-nav-right">
        <img src="@/assets/images/shared/mobile/menu.svg" alt="mobile menu" />
      </div>
      <div v-if="$mq !== 'mobile'" class="main-nav-center">
        <span class="menu-item">Stories</span>
        <span class="menu-item">Features</span>
        <span class="menu-item">Pricing</span>
      </div>
      <div v-if="$mq !== 'mobile'" class="main-nav-right">
        <button class="button-1">Get an Invite</button>
      </div>
    </div>
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
