<template>
  <v-row>
    <v-col class="text-center">
        <v-carousel v-model="model">
          <v-carousel-item
            v-for="(post, i) in posts"
            :key="post.id"
          >
            <v-sheet
              color="primary"
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2">
                  Slide {{ i + 1 }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
          <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
      Posts
        <ul v-for="(item, index) in posts">
           <li>
              {{item.id}} - {{item.name}}
           </li> 
        </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  data: function(){
    return {
      model: 0,
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
      posts:[]
    }
  },
  methods:{},
  async asyncData({ $axios }) {
      const posts = await $axios.$get('http://localhost:3000/api/getjson')
      return { posts }
    } 
  }

</script>
