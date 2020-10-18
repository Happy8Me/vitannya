<template>
    <div class="hello"> 
        <div class="myPhoto" :style="{ backgroundImage: 'url('+ photo +')' }">
            <div class="vitannya">
                <div>  <img :src="seagull" alt="">  <h1> {{ hello }} </h1> </div>
                <p> {{ info }} </p>
                <p> {{ name }} </p>
            </div>
        </div>
        <div class="flex room-container">
            <BottomMenu /> 
        </div>
        
    </div>
</template>

<script>

import BottomMenu from '../components/BottomMenu'
import photo from "../assets/me11.jpg"
import seagull from '../assets/seagull1.png'

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

.vitannya
    margin: 8% auto
    p
        margin: 0 0 7px 0
        font-family:  'Poiret One', cursive
        font-size: 20px
        font-weight: bold
    div
        position: relative
        margin: 10% 10% 22% 10%
        image-orientation: 
        img 
            position: absolute
            width: 25px
            left: 33px
            top: -19px
        h1 
            font-family:  'Poiret One', cursive
            font-size: 55px

.myPhoto 
    margin: 2% 0
    width: auto
    height: 400px
    background-repeat: no-repeat
    background-size: auto 400px 
    background-position: left
    display: flex
    justify-content: center
p 
    text-align: center
    font-size: 20px
    text-shadow: 2px 2px 3px #000000
    color: #ffffff

.room-container
    flex-wrap: wrap


@media only screen and (max-width: 700px) and (min-width: 500px)
    .myPhoto 
       justify-content: flex-end
    .vitannya
        margin: auto 5%
   
@media (max-width: 500px) 
    .myPhoto 
       justify-content: center  
    .vitannya
        margin: 2% auto
        div
            margin-bottom: 100%
</style>
