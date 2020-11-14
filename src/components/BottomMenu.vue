<template>
  <div>
    <div class="md-layout-item md-xsmall-hide ">
        <md-button v-for="item in menuItems" :key="item.path" :to="item.path" class="md-primary">{{ item.title }} </md-button> 
    </div>

</div>
</template>    

<script>
export default {
    name: 'BottomMenu',
    data() {
        return {
             menuItems: [{title: 'Home', path: '/'}, {title: 'CV', path: '/cv'}, {title: 'Contacts', path: '/contacts'}, {title: 'Certificates', path: '/certificates'}]
        }
    },
}

</script>

<style lang="sass" scoped>
a
    height: 12vh
    box-shadow: 0px 0px 5px #d2e4f2
    border-radius: 50%
    min-width: 120px
</style>