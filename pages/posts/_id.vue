<template>
  <v-row>
    <v-col class="text-center">
     
      <div>
        
        <Editor
          :existing-content="editorContent"
          @contentChanged="onChange"
        />
        
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  
  name: 'post',
  data: function(){
    let self = this
    return {
      post:{},
      editorContent:{},
    }
  },
  mounted:function(){
    //let self = this
    
    
    //console.log(self.post._source.content)
    //self.editorContent = 

  },

   methods: {
    onChange(data) {
      console.log('component content was changed...')
      this.editorContent = data;
    },
  },
    
    async asyncData( { $axios , params }) {
        const post = await $axios.$get(`http://localhost:3000/api/post/${params.id}`)
        // console.log(post)
        
        //const  editorContent = this.getData(post._source.content)
        const editorContent = {
          "time" : 1642169498111,
          "blocks" : [
              {
                  "id" : "tjuFzVubFU",
                  "type" : "header",
                  "data" : {
                      "text" : `${ post._source.title }`,
                      "level" : 2
                  }
              },
              {
                  "id" : "rsdLt4_cIR",
                  "type" : "paragraph",
                  "data" : {
                      "text" : `${ post._source.content }`
                  }
              }
          ],
        
      }
        return { post , editorContent };

    } 
  
}
</script>
