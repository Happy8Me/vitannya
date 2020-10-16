<template>

<div class="contacts" v-if=" table == 'true' ">
    <md-table md-card>
        <md-table-toolbar>
            <h3 class="md-title">Contacts</h3>
        </md-table-toolbar>

        <md-table-row v-for="contact in contacts" :key="contact.type">
            <md-table-head>  {{contact.type}}  </md-table-head>
            <md-table-cell>  <a :href="contact.data" target="_blank"> {{contact.name}} </a> </md-table-cell>  
        </md-table-row>
    </md-table>
</div> 

<div v-else>
    <md-list>
        <h3 class="md-title">Contacts</h3>
        
        <div v-for="contact in contacts" :key="contact.type">
            <md-subheader>{{contact.type}} </md-subheader>
            <a :href="contact.data" target="_blank"> {{contact.name}} </a>
        </div>
    </md-list>
</div>   

</template>

<script>
export default {
 name: 'ContactData',
 data() {
     return {
         contacts: [
                {type: 'Address', data: 'https://goo.gl/maps/ggBvQt5naWQMeHjz8', name: 'Odesa, Ukraine'},
                {type: 'Email', data: 'mailto:iryna.hladchenko.iryna@gmail.com', name: 'iryna.hladchenko.iryna@gmail.com'},
                {type: 'Phone', data: 'tel:+380935623590', name: '+380 93 562 3590'},
                {type: 'GitHub', data: 'https://github.com/Happy8Me', name: 'Iryna Hladchenko (Happy8Me)'},
                {type: 'LinkedIn', data: 'https://www.linkedin.com/in/iryna-h-65a63312b/', name: 'Iryna_Hladchenko'},
                {type: 'Facebook', data: 'https://www.facebook.com/IrynaHladchenko/', name: 'Ирина Гладченко'},
                {type: 'Telegram', data: 'https://telegram.me/@Iryna_Hladchenko', name: 'Iryna_Hladchenko'}
            ],
     }
 },
    props: {
        table: {
            type: String,
        }
  },
}
</script>

<style lang="sass" scoped>
.contacts
    width: 550px
  
.md-title
    font-size: 16px
    font-weight: bold 
    margin: 5px 0
    text-align: center
    color: black
.md-theme-default a:not(.md-button)
    color: black
    font-size: 13px
    &:hover
        color: rgb(126, 183, 228)
        text-decoration: none
tbody .md-table-row td
    cursor: pointer
.md-list.md-theme-default
    text-align: left    
    padding: 0
.md-subheader 
    min-height: 20px
    padding: 0
.md-subheader.md-theme-default
    color: rgb(194, 189, 189)
</style>