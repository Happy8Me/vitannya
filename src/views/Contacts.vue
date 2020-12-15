<template>
  <div class="contacts-page">
    <ContactData />

  </div>
  
</template>

<script>
import ContactData from '../components/ContactData'

export default {
    name: 'Contacts',
    components: {
      ContactData
    }
}
</script>

<style lang="sass" scoped>
.contacts-page
  margin: 5% 0
.contacts
  width: 600px
@media (max-width: 700px) 
    .contacts
        width: 480px
@media (max-width: 500px) 
    .contacts
        width: 280px
</style>