<template>
    <div class="card">
        <div class="card-back card-face">
            <img src="../assets/img/card-bg.jpg" class="card-bg"> 
        </div> 

        <div class="card-front card-face">
            <img :src='img' class="card-value"> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        img: {
            type: undefined  
        }
    }
}
</script>

<style lang="sass" scoped>

.card 
    height: 175px
    width: 125px
    position: relative
    border-radius: 12px
    margin: 10px

.card-face 
    position: absolute
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    backface-visibility: hidden
    border: 1px solid
    border-radius: 12px
    transition: transform 500ms ease-in-out 

.card.visible 
    .card-back 
        transform: rotateY(-180deg)
    .card-front 
        transform: rotateY(0)

.card:hover .card-value
    animation: dance 1s linear infinite 500ms

@keyframes dance 
    0%, 100% 
        transform: rotate(0)
    25% 
        transform: rotate(-30deg)
    75% 
        transform: rotate(30deg)

.card-back 
    background-color: white
    border-color: white
    box-shadow: 0 0 10px lightgrey

.card-front 
    transform: rotateY(180deg)
    background-color: white
    border-color: white
    box-shadow: 0 0 10px lightgrey

.card-value  
    transform: scale(.9) 
    transition: transform 100ms ease-in-out  
    width: 100% 
    z-index: -1 
 
.card-front:hover .card-value  
    transform: scale(1) 
 
.card-bg  
    transform: translateY(10px) 
    transition: transform 100ms ease-in-out 
    width: 100% 
    position: absolute 
    top: 10px 
    left: 0

.card-back:hover .card-bg  
    transform: translateY(0) 

@media (max-width: 600px) 
    .card 
        height: 88px
        width: 63px

</style>