<template>
  <aside
    id="sidebar"
    class="static h-auto overflow-y-visible pt-0 w-48 block flex-none z-20 inset-0"
  >
    <div id="nav-wrapper">
      <nav id="nav" class="pt-2 pl-3 px-1">
        <ul class="mb-0">
          <li v-for="(category, index) in menuItems" :key="index" class="mt-8">
            <h5
              class="text-xs text-gray-900 tracking-wide uppercase font-semibold mb-2"
            >
              {{ category.name }}
            </h5>
            <ul class="py-1">
              <li
                v-for="(menuItem, subIndex) in category.menuItems"
                :key="subIndex"
              >
                <router-link
                  :to="{ path: '/' + formatMenuItem(menuItem) }"
                  class="py-2 text-gray-500 font-medium items-center flex-wrap flex relative"
                >
                  {{ menuItem }}
                </router-link>
                <!-- <a
                  href="#"
                  class="py-2 text-gray-500 font-medium items-center flex-wrap flex relative"
                >
                  {{ menuItem }}</a
                > -->
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      menuItems: [
        {
          name: "Category 1",
          menuItems: ["Menu 1.1", "Menu 1.2"],
        },
        {
          name: "Category 2",
          menuItems: ["Alert", "Form Input", "Menu 2.2"],
        },
      ],
    };
  },
  methods: {
    formatMenuItem(menuItem) {
      return menuItem.toLowerCase().replace(/\s+/g, "-");
    },
  },
};
</script>
