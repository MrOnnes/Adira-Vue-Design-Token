<template>
  <nav>
    <div
      class="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center">
        <img
          class="h-8 mr-3"
          src="https://www.adira.co.id/frontend/images/Logo-Adira-Finance-200-yellow.png"
          alt="Adira Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Design Token</span
        >
      </a>
      <div id="navbar-default" class="w-auto">
        <ul class="font-medium flex">
          <li v-for="(menuItem, index) in menuItems" :key="index">
            <router-link
              :to="{ path: '/' + menuItem }"
              class="block py-2 px-3 text-gray-900 hover:text-yellow-700"
            >
              {{ menuItem }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "MainNav",
  data() {
    return {
      menuItems: ["Home", "About"],
    };
  },
};
</script>
<style scoped>
dl,
ol,
ul {
  list-style-type: none;
}
</style>
