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
    padding: 0 7px
    display: flex
    width: 700px
    max-width: 700px
    margin: 3% 
    font-size: 11px
    border: 1px solid rgba(165, 209, 244, 0.80)
    .wrapper-left
        text-align: center
        padding: 15px
        margin-right: 20px
    .wrapper-right
        padding: 15px
.photo
    display: flex
    justify-content: center
    padding: 10px
    img 
        width: 150px
        height: 150px
        border: 3px solid white
        border-radius: 50%

.name
    padding-bottom: 20px
    h1
        margin: 20px 0 10px 0
        font-size: 22px
    h2
        margin: 0
        font-size: 16px
    
</style>