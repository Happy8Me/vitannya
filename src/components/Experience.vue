<template>
<div class="experience">
    
    <h3> Experience </h3>

    <div v-for="exp in experience" :key="exp.year">
        <p class="year"> {{ exp.organisation }} <span>{{ exp.year }}</span> </p>
        <p> {{ exp.position }} </p>
    </div>

</div>
   
</template>

<script>
export default {
    name: 'Experience',
    data(){
        return {
            experience: [
                {year: '2018 – Present', position: 'Customer Support Agent (English)', organisation: 'SelectSpecs.com'},
                {year: '2017 – 2018', position: 'Author of educational posts and travel guides', organisation: 'Freelance'},
                {year: '2012 – 2017', position: 'Economist', organisation: 'Misto Bank'}  
            ],
        }
    }
}
</script>

<style lang='sass' scoped>
h3
    font-size: 16px
    font-weight: bold 
    letter-spacing: .5px
    margin: 40px 0 20px 0
    text-align: left
    border-bottom: 1px dashed #808080
    padding-bottom: 3px
p
    font-size: 12px
    margin: 0
    text-align: left
    line-height: 21px
.year
    font-weight: 800
    display: flex
    justify-content: space-between

</style>