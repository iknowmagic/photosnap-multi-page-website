<template>
  <div class="mobile-menu-container">
    <transition name="fade">
      <div
        v-if="openMenu"
        class="mobile-menu-backcloth"
        @click="openMenu = false"
      ></div>
    </transition>
    <transition name="mobile-menu-transition">
      <div v-if="openMenu" class="mobile-menu"></div>
    </transition>
  </div>
</template>

<script>
// @flow

import { sync } from 'vuex-pathify'

export default {
  name: 'MobileMenu',
  computed: {
    openMenu: sync('mobileMenu/openMenu')
  }
}
</script>
