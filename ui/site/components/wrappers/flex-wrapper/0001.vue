<template>
  <div class="app flex flex-col flex-1 h-full">
    <appHeader />
    <div class="app__body flex-1">
      <slot></slot>
    </div>
    <appHeader />
  </div>
</template>

<script>
import appHeader from '../../doodads/header/0001'
export default {
name: "component__container",
components: {
  appHeader
}
}
</script>

<style>

</style>
