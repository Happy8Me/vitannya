<template>
<div class="skills">
    <h3>Skills</h3>
    <ul>
        <li v-for="skill in skills" :key="skill">
            <p class="l-item"> {{ skill }}  </p>  
        </li>

    </ul>

    <h3>Languages</h3>
    <ul class="langua">
        <li v-for="lang in languages" :key="lang.name">
           <p class="l-item"> {{lang.name}} ( {{lang.level}} ) </p>  
        </li>
    </ul>

</div>
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{
            skills: ['JavaScript / ES6', 'Vue.js / Vuex', 'Git', 'REST', 'HTML5', 'CSS3/SASS/SCSS', 'AJAX', 'Node.js (basic)', 'TypeScript', 'Photoshop / Avocode'],
            languages: [{name: 'Ukrainian', level: 'native'}, {name: 'Russian', level: 'native'}, {name: 'English', level: 'advanced'}],
        }
    }
}
</script>

<style lang="sass" scoped>

ul
    list-style: disc
    color: black
    p
        color: black
        font-size: 11px
        text-align: left
        margin: 3px 0
h3
    font-size: 16px
    font-weight: bold 
    margin: 5px 0
    color: black
    text-align: left
    border-bottom: 1px dashed #808080
    margin: 15px 0 20px 0   
    padding-bottom: 3px

</style>