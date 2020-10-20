<template>
  <div>

      <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
      </CoolLightBox>

    <div class="images-wrapper ">
        <div
        class="image-holder md-elevation-4"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        >
        <img :src="image.src" alt="sertificate">
      </div>
      
    </div>
  </div>
</template>

<script>

import img1 from '../assets/en.png'
import img2 from '../assets/cae.jpg'

import CoolLightBox from 'vue-cool-lightbox'
import '../../node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'LightBox',
    components: {
        CoolLightBox,
    },
    data: function () {
    return {
      items: [
        {
          // title: 'In nature, nothing is perfect and everything is perfect',
          // description: "Photo by Lucas",
          src: img1,
        },
           {
          // title: 'In nature, nothing is perfect and everything is perfect',
          // description: "Photo by Lucas",
          src: img2,
        }
      ],
      index: null
    };
  },
}
</script>

<style lang="sass" scoped>

.images-wrapper
  height: 100%
  display: flex
  justify-content: center
  margin-top: 8%
.image-holder
  display: flex
  margin: 20px
  justify-content: center
  cursor: pointer
  transition: 0.5s
  &:hover
    box-shadow: 0px 0px 30px rgba(165, 209, 244, 0.90)
    transition: 0.5s
img
  width: 200px
  height: auto
  display: flex
  align-self: center
</style>