<template>
<div>
    <h3> Education </h3>

    <div class="edu" v-for="edu in education" :key="edu.year">
        <p class="year"> {{ edu.school }} <span>{{ edu.year }}</span> </p>
        <p>  {{ edu.subject }} </p>
    </div>
    
</div>
</template>

<script>
export default {
    name: 'Education',
    data(){
        return {
            education: [
                {year: 'April 2020 - September 2020', school: 'Hillel IT School', subject: 'Front-end Pro (JavaScript)'},
                {year: '2014 – 2015', school: 'London School of English', subject: 'CAE (C1 Advanced)'},
                {year: '2007 – 2012', school: 'Odessa National Economics University', subject: 'Master in Finance and Credit'}
            ]
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