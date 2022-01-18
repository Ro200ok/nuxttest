<template>
  <v-row>
    <v-col class="text-center">
      Posts
        <ul v-for="(item) in posts">
           <li>
             <a :href="`http://localhost:3000/posts/${item._id}`">
              {{item._id}} - {{item._source.title}}
              </a>
           </li> 
        </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  // middleware: 'checkAuth',
  data: function(){
    return {
      posts:[]
    }
  },
  mounted:function(){
    let self = this
    console.log(self.posts)

  },
  methods:{},
  async asyncData({ $axios }) {
        const posts = await   $axios.$get('http://localhost:3000/api/posts')
        
        // console.log(posts)
     
        return { posts };
    /*
      const posts = await $axios.$get('http://elastic:MagicPatriotgorodPeremens876tghui@new-el.fabricmedia.ru:9271/posts/_search').then(resp => {

          return resp.hits;
      });
      */
      //const posts = await $axios.$get('http://localhost:3000/api/getjson')
      //return { posts }
    } 
  }

</script>
