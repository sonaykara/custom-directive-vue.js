<template>
  <div>
    <div v-display = "'hide'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, distinctio?</div>
    <div v-display = "'show'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, odio?</div>
    <div v-display:flex>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, vero.</p>
    </div>

    <div v-display:grid = "'grid'">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, vero.</p>
    </div>

    <div v-display:inline-block >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, perferendis.</div>


  </div>
</template>

<script>
  export default {
   
  }
</script>




<style lang="scss" scoped>

</style>
