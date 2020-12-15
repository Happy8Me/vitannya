<template>
    <div class="hello"> 
        <div class="myPhoto" :style="{ backgroundImage: 'url('+ photo +')' }">
            <div class="vitannya">
                <div class="title">  <img :src="seagull" alt="">  <h1> {{ hello }} </h1> </div>
                <div class="text">
                    <p> {{ info }} </p>
                    <p> {{ name }} </p>
                </div>
                
            </div>
        </div>
        <BottomMenu /> 
      </div>
</template>

<script>

import BottomMenu from '../components/BottomMenu'
import photo from "../assets/img/me11.jpg"
import seagull from '../assets/img/seagull1.png'

export default {
    name: 'Home',
        components: { 
            BottomMenu
        },
    data() {
        return {
            info: "I am a Front - end developer",
            name: 'Iryna Hladchenko',
            photo,
            seagull,
            hello: 'Вітання'
        }
    }
}
</script>

<style lang="sass" scoped>
.myPhoto 
    margin: 2% 0
    width: auto
    height: 400px
    background-repeat: no-repeat
    background-size: auto 400px 
    background-position: left
    display: flex
    
.vitannya
    margin: 8% auto
.title
    position: relative
    margin: 5% 10% 22% 10%
    image-orientation: 
    img 
        position: absolute
        width: 25px
        left: 33px
        top: 3px
    h1 
        font-family:  'Poiret One', cursive
        font-size: 55px
        margin: 0

.text
    padding-bottom: 20px
    font-family:  'Poiret One', cursive
    font-size: 20px
    font-weight: bold
    text-align: center
    text-shadow: 2px 2px 3px #000000
    color: #ffffff

@media (max-width: 700px) and (min-width: 500px)
    .myPhoto 
       justify-content: flex-end
    .vitannya
        margin: auto 5%
   
@media (max-width: 500px) 
    .myPhoto 
       justify-content: center  
    .vitannya
        margin: 2% auto
    .title
        margin-bottom: 130%
</style>
