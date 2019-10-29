<template>

<div>
This is the About Page. It is an example on how you can run functions that are local to a component, and a function that will globally increment the vuex store.     To test this. Increment both states. Then, navigate to a different page, and back. You can see which state was lost and which remained.

<p>
Local: {{ counter }}
<br>
Global: {{ this.$store.state.count}}
</p>
<button v-on:click="changeStateLocal">Increment Local State</button>
    <br>
<button v-on:click="changeStateGlobal">Increment Global State</button>

</div>

</template>

<script>
import Vue from 'vue'

new Vue({
  created: function () {
    console.log('about created')
  },
  mounted: function () {
      console.log('about mounted')
  }

})

export default {
  name: 'About',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
      changeStateLocal (event) {
        console.log(event);
        console.log('clicked');
        this.counter += 1
    },
      changeStateGlobal (){
          this.$store.commit('increment')
      }

  }
}

</script>
