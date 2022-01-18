<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink class="link" to="/">
    
    
     Home page </NuxtLink>
     <img src="@/assets/img/cryptopunk_6046.webp" alt="">
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Нот фаунде. Можно и покурить',
      otherError: 'Эн еррор оккуред. Можно и перекурить',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}

h1, img, .link {
  
  margin: 10px auto 20px;
  display: block;
  
}

img {
  margin-bottom: 40px;
  width: auto;
  height: auto;
}
</style>
