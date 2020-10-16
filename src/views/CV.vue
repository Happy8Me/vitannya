<template>
<div class="outter-wrapper">

    <div class="wrapper md-layout md-gutter md-alignment-center ">
        <div class="inver wrapper-left md-xsmall-size-100">
            <div class="photo"> <img :src="photo" alt="photo"> </div>

            <Skills />
            <ContactData table = 'false' />
        </div>

        <div class="wrapper-right md-layout-item  md-xsmall-size-100">
            <div class="name">
                <h1> Iryna Hladchenko </h1>
                <h2> Front-end Developer </h2>
            </div>

            <Summary />
            <Experience />
            <Education />
            <AddInfo />
        </div> 
    </div>
    
</div>   
</template>

<script>

import photo from '../assets/myPhoto.jpg';
import ContactData from '../components/ContactData';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import AddInfo from '../components/AddInfo';

export default {
    name: "CV",
    components: {
        ContactData,
        Skills,
        Education,
        Summary,
        Experience,
        AddInfo
    },
    data(){
        return {
            photo,
        }
    }
}
</script>

<style lang="sass" scoped>

.skills
    color: white
.outter-wrapper
    display: flex
    justify-content: center
.wrapper 
    display: flex
    max-width: 700px
    margin: 3% 
    font-size: 12px
    border: 1px solid rgba(165, 209, 244, 0.80)
    .wrapper-left
        text-align: center
        padding: 15px
    .wrapper-right
        height: 100%
        background-color: rgba(165, 209, 244, 0.80)
        padding: 15px

.md-list.md-theme-default
    background-color: #83c1f1b5

.photo
    display: flex
    justify-content: center
    padding: 10px
    img 
        width: 125px
        height: 160px
        border: 5px solid white
        border-radius: 3px

.name
    padding-bottom: 20px
    border-bottom: 1px dashed rgb(162, 162, 162)
    h1
        margin: 20px 0 10px 0
        font-size: 22px
    h2
        margin: 0
        font-size: 16px
    
</style>