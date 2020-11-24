<template>
  <div id="findTwins">
      <div class="title">
       <h1>Find Twins</h1> 
       <div class="stopMusic" @click="toggleMusic"></div>
    </div>
    
    <div @click="startGame" class="overlay-text visible" v-if="toStartGame">
        Click to start
    </div>

    <div id="game-over" class="overlay-text visible" v-if="gameIsOver" @click="startGame">
        GAME OVER
        <span class="overlay-text-small">Click to restart</span>
    </div>

    <div id="victory" class="overlay-text visible" v-if="isVictory" @click="startGame">
        VICTORY
        <span class="overlay-text-small">Click to restart</span>
    </div> 

    <div class="container">
        <div class="info-container">
            <div class="info">
                Time <span>{{timeRemaining}}</span>
            </div>
            <div class="info">
                Flips <span>{{clicksRemaining}}</span>
            </div>
        </div>
        <div :v-if="renderComponent" v-for="(imgTwin, index) in imgTwins" :key="index" @click="flipCard(index)" >
            <Card ref="card" :img="imgTwin"/>
        </div>
        
    </div>
  </div>
</template>

<script>
import twin1 from '../assets/img/1.png'
import twin2 from '../assets/img/2.png'
import twin3 from '../assets/img/3.png'
import twin4 from '../assets/img/4.png'
import twin5 from '../assets/img/5.png'
import twin6 from '../assets/img/6.png'
import twin7 from '../assets/img/7.png'
import twin8 from '../assets/img/8.png'

import bgMusic from '../assets/audio/bg-music.mp3'
import matchMusic from '../assets/audio/match.mp3'
import victoryMusic from '../assets/audio/victory.mp3'
import gameOverMusic from '../assets/audio/gameOver.mp3'
import flipMusic from '../assets/audio/flip.wav'

import Card from '../components/Card.vue'

export default {
  name: 'FindTwins',
  components: {
        Card
  },
  data(){
    return {
        imgTwins: [twin1, twin2, twin3, twin4, twin5, twin6, twin7, twin8, twin1, twin2, twin3, twin4, twin5, twin6, twin7, twin8],
        renderComponent: true,
        clickedCard: null,
        matchedCards: [],
        totalClicks: 35,
        totalTime: 60,
        gameIsOver: false,
        isVictory: false,
        toStartGame: true,
        timeRemaining: '',
        clicksRemaining: '',
        bgMusic,
        matchMusic,
        victoryMusic,
        gameOverMusic,
        flipMusic
    }
  },
  methods: {
    startGame: function(){
        this.cardToCheck = undefined;
        this.clicksRemaining = this.totalClicks;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true; 
        this.audioBg = new Audio(this.bgMusic);
        this.audioBg.volume = 0.03;
        this.audioBg.loop = true;
        this.audioMatch = new Audio(this.matchMusic);
        this.audioFlip = new Audio(this.flipMusic);
        this.audioFlip.volume = 0.3;
        this.audioVictory = new Audio(this.victoryMusic);
        this.audioGameOver = new Audio(this.gameOverMusic);
        setTimeout(() => {
            this.gameIsOver = false;
            this.isVictory = false;
            this.toStartGame = false;
            this.audioBg.play();
            this.shuffle();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
    },
    shuffle: function(){
        this.hideCards();
        this.matchedCards = [],
        this.renderComponent = false;
        for(let i = this.imgTwins.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i+1));
                [this.imgTwins[i], this.imgTwins[j]] = [this.imgTwins[j], this.imgTwins[i]];
            }

        this.renderComponent = true; 
    },
    startCountDown: function(){
        return setInterval(() => {
            this.timeRemaining--;
            if(this.timeRemaining == 0){
                this.gameOver();
            }
        }, 1000);
    },
    hideCards: function(){
        this.$refs.card.forEach(card => {
            card.$el.classList.remove('visible')   
        })
    },
    flipCard: function(card){
        if(this.canFlipCard(card)){
            this.audioFlip.play();
            this.clicksRemaining--;
            this.$refs.card[card].$el.classList.add('visible')
            if(this.clickedCard || this.clickedCard === 0){
                this.checkForCardMatch(card);
            } else {
                this.clickedCard = card;
            }
               
            if(this.clicksRemaining === 0){
                this.gameOver();
            }
        }
    },
    canFlipCard: function(card){
        return  !this.busy && 
                !this.matchedCards.includes(card) &&
                card != this.clickedCard;    
    },
    checkForCardMatch: function(card){
        if(this.imgTwins[card] == this.imgTwins[this.clickedCard]) { 
            this.cardMatch(card, this.clickedCard);
        } else {
            this.cardMisMatch(card, this.clickedCard);
        }
        this.clickedCard = null;
    },
    cardMatch: function(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if(!this.audioMatch.paused){
            this.audioMatch.pause();
            this.audioMatch.currentTime = 0;
        }
        this.audioMatch.play()
        if(this.matchedCards.length === this.imgTwins.length) {
            this.victory();
        }
    },
    cardMisMatch: function(card1, card2){
        this.busy = true;
        setTimeout(() => {
            this.$refs.card[card1].$el.classList.remove('visible')
            this.$refs.card[card2].$el.classList.remove('visible')
            this.busy = false;
        }, 1000);
    },
    gameOver: function(){
        clearInterval(this.countDown);
        this.stopBgMusic();
        this.audioGameOver.play();
        this.gameIsOver = true;
    },
    victory: function(){
        clearInterval(this.countDown);
        this.stopBgMusic(); 
        this.audioVictory.play();
        this.isVictory = true;
    },
    stopBgMusic: function() {
        this.audioBg.pause();
        this.audioBg.currentTime = 0;
    },
    toggleMusic: function(){
        if (this.audioBg.paused){
            this.audioBg.play();
        } else {
            this.audioBg.pause();
        }
    },
  },
  beforeRouteLeave (to, from, next) {
    if (this.audioBg && !this.audioBg.paused) {
        this.timeRemaining = null;
        this.stopBgMusic();
        next()
    } else {
        next(false)
    }
  }
}

</script>

<style lang="sass" scoped>

#findTwins 
    margin: 0
    min-height: 100vh
    background: radial-gradient(#ffffff, #a5d1f4cc)
    box-sizing: border-box

.title  
    color:#6a9134 
    font-weight: bold 
    font-family: 'Poiret One', cursive 
    display: flex 
    justify-content: center 
    align-items: center 
    h1  
        font-size: 6em 
 
.stopMusic  
    border: 2px solid 
    border-radius: 50% 
    padding: 5px 5px 5px 9px 
    font-size: 20px 
    margin: 20px 
    transition: .5s 
    &:before  
        content: '\25BA' 
    &:hover 
        background: white 
    
.info  
    font-family: 'Poiret One', cursive 
    color: white 
    font-size: 2em 
    text-shadow: 1px 1px 3px black 

.info-container  
    width: 100%
    display: flex 
    justify-content: space-between 
    
.container  
    display: flex
    flex-wrap: wrap
    max-width: 605px
    margin: auto
    padding: 40px 10px
    justify-content: center 
    perspective: 500px 

.overlay-text 
    display: none 
    position: absolute 
    top: 65px 
    left: 0 
    right: 0 
    bottom: 0 
    justify-content: flex-start 
    align-items: center 
    z-index: 100 
    color: #97bc66 
    font-family: 'Poiret One', cursive 
    padding-top: 300px

.overlay-text-small 
    font-size: .3em 
    margin-top: 10vh
 
.overlay-text.visible 
    display: flex 
    flex-direction: column 
    animation: overlay-grow 500ms forwards 

@keyframes overlay-grow 
    from 
        background-color: rgba(0, 0, 0, 0)
        font-size: 0
    to 
        background-color: rgba(0, 0, 0, .9)
        font-size: 8em
 
@media only screen and (max-width: 960px) and (min-width: 600px)
    .overlay-text 
       top: 49px  

@media (max-width: 600px) 
    .overlay-text 
       top: 57px  
    .title h1  
        font-size: 3em 

    @keyframes overlay-grow 
        from 
            background-color: rgba(0, 0, 0, 0)
            font-size: 0
        to 
            background-color: rgba(0, 0, 0, .9)
            font-size: 3em
</style>


https://matthiashager.com/tardis/vuejs-media-player-tutorial
https://habr.com/ru/company/ruvds/blog/337732/