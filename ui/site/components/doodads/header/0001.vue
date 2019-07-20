<template>
  <div id="header" class="header flex flex-row justify-between px-4 py-4 border-b border-solid border-black">
    <div class="header__left flex flex-auto">
      <div class="header__brand">
        <img class="header__brand-logo" src="https://via.placeholder.com/100x50/#FFFFFF" />
      </div>
    </div>
    <div class="header__right flex flex-auto items-center mr-10">
      <nav class="header__nav flex-auto">
        <ul class="nav__list flex flex-row justify-between">
          <li class="nav__item"><a href="#" class="nav__link">Link</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Link</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Link</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Link</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
name: 'doodad__header'
}
</script>

<style>

</style>
