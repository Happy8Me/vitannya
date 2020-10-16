<template>
  <div class="contacts-page">
   <ContactData table = 'true' />

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
  display: flex
  justify-content: center
  margin: 5% 0
</style>