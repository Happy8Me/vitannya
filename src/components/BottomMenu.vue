<template>
    <div class="btn-group">
        <router-link v-for="item in menuItems" :key="item.path" :to="item.path" class="btn">{{ item.title }} </router-link> 
    </div>
</template>    

<script>
export default {
    name: 'BottomMenu',
    data() {
        return {
             menuItems: [{title: 'Home', path: '/'}, {title: 'CV', path: '/cv'}, {title: 'Contacts', path: '/contacts'}, {title: 'Certificates', path: '/certificates'}, {title: 'Find Twins', path: '/find_twins'}]
        }
    },
}

</script>

<style lang="sass" scoped>
.btn-group
    width: 100%
    display: flex
    justify-content: center
    flex-wrap: wrap
    margin: 20px 0
.btn
    border: 0
    background-color: #ffffff
    margin: 0 15px
    color: #54adf5
    cursor: pointer
    transition: .2s
    font-size: 15px
    &:hover
        color: #ffffff
        text-shadow: 0px 1px 2px #000000
    &:focus
        outline: none  
@media (max-width: 500px) 
    .btn-group
        display: none
</style>