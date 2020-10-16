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
                {year: '2015', school: 'Hillel IT School', subject: 'Front-end Basic'},
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
    margin: 15px 0 
p
    font-size: 13px
    margin: 2% 
    text-align: left
.year
    font-weight: bold
    display: flex
    justify-content: space-between
</style>