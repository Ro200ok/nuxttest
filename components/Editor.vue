<template>
    <div>
        <div id="editorjs" />
     </div>
</template>

<script>
export default {
  name: 'Editor',
  
  props: {
    existingContent: { type: Object, default: () => {} }
  },
  data() {
    return {
      editor: null,
    }
  },
  async mounted() {
    let self = this;  
    let editorOptions = {
      id: 'editorjs',
      data: self.existingContent,
      onChange: self.onChange
    };
    this.editorCore = this.$editor;
    this.editor = this.editorCore(editorOptions);
    await this.editor.isReady;
  },
  methods: {
    async onChange() {
      try {
        const updatedData = await this.editor.save();
        console.log('Article data saved: ', updatedData)
        this.$emit('contentChanged', updatedData);
      } catch (error) {
        console.log('Saving failed: ', error)
      }
    },
  }
}
</script>