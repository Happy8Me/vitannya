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
        <div v-for="lang in languages" :key="lang.name">
           <p class="l-item"> {{lang.name}} ( {{lang.level}} ) </p>  
        </div>
    </ul>

</div>
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{
            skills: ['JavaScript/ES6', 'Vue.js/Vuex','DOM', 'HTML', 'CSS/SASS/SCSS', 'jQuery', 'Promise', 'Node.js (basic)', 'TypeScript', 'Avocode/Photoshop'],
            languages: [{name: 'Ukrainian', level: 'native'}, {name: 'Russian', level: 'native'}, {name: 'English', level: 'advanced'}],
        }
    }
}
</script>

<style lang="sass" scoped>

ul
    padding: 0
    p
        color: black
        font-size: 13px
        text-align: left
        margin: 3px 0
h3
    font-size: 16px
    font-weight: bold 
    margin: 5px 0
    color: black
   

</style>