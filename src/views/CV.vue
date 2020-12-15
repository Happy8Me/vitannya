<template>
<div class="outter-wrapper">

    <div class="wrapper">
        <div class="wrapper-left">
            <div class="photo"> <img :src="photo" alt="photo"> </div>

            <Skills />
            <ContactData />
        </div>

        <div class="wrapper-right">
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

    <a class="btnDownload" :href="cv" download>Download CV</a>
    
</div>   
</template>

<script>

import photo from '../assets/img/myPhoto.jpg';
import cv from '../assets/img/CV_Iryna_Hladchenko.png'
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
            cv
        }
    }
}
</script>

<style lang="sass" scoped>

.skills
    color: white
    padding: 15px 15px 0 15px
.outter-wrapper
    display: flex
    justify-content: center
    position: relative
.wrapper 
    padding: 0 7px
    display: flex
    flex-wrap: wrap
    justify-content: center
    width: 700px
    max-width: 700px
    margin: 3% 0 100px 0 
    font-size: 12px
    border: 1px solid rgba(165, 209, 244, 0.80)
.wrapper-left
    text-align: center
    padding-right: 20px
.wrapper-right
    padding: 15px
    width: 60%
.photo
    display: flex
    justify-content: center
    padding: 10px
    img 
        width: 150px
        height: 150px
        border: 3px solid white
        border-radius: 50%
.contacts
    width: 214px
    box-shadow: none
    padding-right: 15px
.name
    padding-bottom: 20px
    h1
        margin: 20px 0 10px 0
        font-size: 22px
    h2
        margin: 0
        font-size: 16px
.btnDownload
    border: 1px solid rgba(165, 209, 244, 0.8)
    background-color: #ffffff
    color: #54adf5
    cursor: pointer
    transition: .3s
    display: flex
    align-items: center
    justify-content: center
    width: 185px
    height: 50px
    position: absolute
    bottom: 0
    left: 50%
    transform: translate(-50%, -50%)
    &:focus
        outline: none 
    &:hover 
        background: #54adf51c
        cursor: pointer
@media (max-width: 760px) 
    .wrapper-right
        width: 100%
</style>