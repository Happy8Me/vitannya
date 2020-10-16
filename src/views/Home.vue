<template>
    <div class="hello">

            <div class="vitannya">
                <div>  <img :src="seagull" alt="">  <h1> {{ hello }} </h1> </div>
                <p> {{ info }} </p>
                <p> {{ name }} </p>
            </div>
            <div class="myPhoto">
                <img :src="photo" alt="photo of me">
            </div>
        <div class="flex room-container">
            <BottomMenu /> 
        </div>
        
    </div>
</template>

<script>

import BottomMenu from '../components/BottomMenu'
import photo from "../assets/me11.png"
import seagull from '../assets/seagull1.png'

export default {
    name: 'Home',
        components: {
            BottomMenu
        },
    data() {
        return {
            info: 'I am a Front-end developer',
            name: 'Iryna Hladchenko',
            photo,
            seagull,
            hello: 'Вітання'
        }
    }
}
</script>

<style lang="sass" scoped>
.vitannya
    position: absolute
    width: 90%
    left: 5%
    div
        display: flex
        position: relative
        margin: 0 0 3vh 0px
        image-orientation: 
        img 
            position: absolute
            width: 25px
            left: 31px
            top: 17px
        h1 
            font-family:  'Caveat', cursive
            font-size: 55px

.myPhoto 
    margin: 2% 0
    img
        margin: auto
p 
    text-align: left
    font-size: 20px
.flex 
    display: flex
    justify-content: center

.room-container
    flex-wrap: wrap
   
</style>
