<template>
<div>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
       <md-button v-for="item in menuItems" :key="item.path" :to="item.path" class="md-primary  md-xsmall-hide ">{{ item.title }} </md-button>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-list>
            <md-button v-for="item in menuItems" :key="item.path" :to="item.path" class="md-primary">{{ item.title }} </md-button>
        </md-list>
    </md-drawer>

</div>
</template>    

<script>
export default {
    name: 'Menu',
    data() {
        return {
            menuItems: [{title: 'Home', path: '/'}, {title: 'CV', path: '/cv'}, {title: 'Contacts', path: '/contacts'}, {title: 'Certificates', path: '/certificates'}],
            showNavigation: false,
            showSidepanel: false
        }
    },
}
</script>

<style lang="sass" scoped>

body 
    margin: 0
.md-toolbar.md-theme-default.md-primary
    background-color: rgba(165, 209, 244, 0.80)
</style>