<template>
<div>
    <nav class="main-menu">
        <button ref="mobMenuBtn" v-if="mobMenu" class="icon" @click="showMobMenu = true"></button>
        <div v-if="fullMenu">
            <router-link class="main-menu-item" v-for="item in menuItems" :key="item.path" :to="item.path" >{{ item.title }} </router-link>
        </div>
    </nav>
    
    <transition  name="fade">
        <ul class="side-menu" ref="mobMenu" v-if="showMobMenu">
            <li v-for="item in menuItems" :key="item.path">
                <router-link class="side-menu-item" @click="showNavigation = false"  :to="item.path" >{{ item.title }} </router-link>
            </li>
        </ul>
    </transition>

</div>
</template>    

<script>
export default {
    name: 'Menu',
    data() {
        return {
            menuItems: [{title: 'Home', path: '/'}, {title: 'CV', path: '/cv'}, {title: 'Contacts', path: '/contacts'}, {title: 'Certificates', path: '/certificates'}, {title: 'Find Twins', path: '/find_twins'}],
            mobMenu: false,
            fullMenu: true,
            showMobMenu: false
        }
    },
    mounted() {
          if (window.innerWidth >= 800) {
                this.mobMenu = false,
                this.fullMenu = true
            } else {
                this.mobMenu = true,
                this.fullMenu = false
            }
    },
    created() {
        window.addEventListener('click', (e) => {
            if( this.$refs.mobMenu != e.target && 
                this.$refs.mobMenuBtn != e.target && 
                this.showMobMenu == true){
                    
                this.showMobMenu = false
            }
        })
    },
}
</script>

<style lang="sass" scoped>

.main-menu 
    position: absolute
    width: 100%
    top: 0
    z-index: 200
    display: flex
    min-height: 48px
    background-color: rgba(165,209,244,.8)
    align-items: center
    box-shadow: 0 0 10px #575757
    padding: 0 5px
    .main-menu-item
        text-transform: uppercase
        color: #ffffff
        font-size: 14px
        font-weight: 500
        padding: 10px 20px
        transition: .3s
        border-radius: 5px
        &:focus 
            outline: none
        &:hover 
            background-color: rgba(165,209,244,0.5)
    .icon
        background: transparent
        border: 0
        cursor: pointer
        outline: none
        &::before 
            content: '\002630'
            border: 0
            color: #ffffff
            font-size: 17px
            margin: 10px 15px
.side-menu
    min-width: 200px
    position: absolute
    z-index: 200
    top: 55px
    left: 5px
    padding: 25px 0
    background-color: rgb(255, 255, 255)
    border-radius: 5px
    box-shadow: 0px 0px 8px 2px #b7daf6
    li
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: start
        transition: .3s
        &:hover 
            background-color: rgb(183, 218, 246)
            cursor: pointer
            & a
                color: #ffffff
.side-menu-item
    color: rgb(84, 173, 245)
    width: 100%
    margin: 0
    text-align: left
    padding: 15px 35px
    &:focus 
        outline: none
    &:hover 
        text-decoration: none

.fade-enter-active, .fade-leave-active 
  transition: opacity .4s

.fade-enter, .fade-leave-to 
  opacity: 0

</style>