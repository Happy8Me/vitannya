<template>
    <div class="contacts">
        <h3>Contacts</h3>
        <div class="contact" v-for="contact in contacts" :key="contact.type">
            <div class="contact-name">  {{contact.type}}  </div>
            <a :href="contact.data" target="_blank"> {{contact.name}} </a>  
        </div>
    </div> 
</template>

<script>
export default {
 name: 'ContactData',
 data() {
     return {
         contacts: [
            {type: 'Address', data: 'https://goo.gl/maps/ggBvQt5naWQMeHjz8', name: 'Odesa, Ukraine (ready to relocate)'},
            {type: 'Email', data: 'mailto:iryna.hladchenko.iryna@gmail.com', name: 'iryna.hladchenko.iryna@gmail.com'},
            {type: 'Phone', data: 'tel:+380935623590', name: '+380 93 562 3590'},
            {type: 'GitHub', data: 'https://github.com/Happy8Me', name: 'Iryna Hladchenko (Happy8Me)'},
            {type: 'LinkedIn', data: 'https://www.linkedin.com/in/iryna-h-65a63312b/', name: 'Iryna_Hladchenko'},
            {type: 'Facebook', data: 'https://www.facebook.com/IrynaHladchenko/', name: 'Ирина Гладченко'},
            {type: 'Telegram', data: 'https://telegram.me/@Iryna_Hladchenko', name: 'Iryna_Hladchenko'},
            {type: 'My application', data: 'https://vitannya.herokuapp.com/#/', name: 'https://vitannya.herokuapp.com/'}
        ],
     }
 },
}
</script>

<style lang="sass" scoped>
.contacts
    padding: 20px 0
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
    display: flex
    flex-direction: column
    margin: auto
.contact 
    display: flex
    min-height: 35px
    align-items: center
    letter-spacing: .4px
    flex-wrap: wrap
    transition: .3s ease-in-out
    padding: 5px 0 5px 15px
    &:hover  
        background-color: #b7daf63d
    a 
        color: #000000
        transition: .3s ease-in-out
        font-size: 12px
        &:visited
            outline: none
    &:hover a 
        color: #54adf5
    &:hover .contact-name 
        color: #54adf5
h3
    font-size: 16px
    font-weight: bold
    color: black
    text-align: left
    border-bottom: 1px dashed #808080
    margin: 0 0 15px 15px
    padding-bottom: 3px
    letter-spacing: .5px
.contact-name
    text-align: left
    width: 180px
    color: rgba(0,0,0,.3)
    font-weight: 600
    font-size: 13px
    transition: .3s ease-in-out

@media (max-width: 700px) 
    .contact a 
        width: 100%
    .contact-name
        width: 50%

</style>