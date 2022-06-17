<template>
        <navbar/>
        <main>
                <div class="dev__items">
                        <div class="dev__item" v-for="item in DevWorks"   :key="item.id">
                        <div class="item__photo">
                                <img :src="require(`@/assets/${item.name.toLowerCase().replace(/ /g,'')}.png`)" />
                        </div>
                        <p class="item__desc">{{item.name}}</p>
                             <div class="item__mask">
                                <span @click="moreBtn(item)">More</span>
                        </div>
                        </div>
                </div>
           
                        
        </main>
        <modal-component :modalInfo="modalItem" :isOpen="this.isOpen"/>
        <footer-component/>
</template>
<script>
export default {
    data(){
            return{
                    DevWorks:[
                        {id:0, name:'knr-cars', desc:'Website for the sale of new and used cars', techs:{tech1:'PHP', tech2:'JS', tech3:'HTML', tech4:'SCSS', },link:'https://knr-cars.ru/'},
                        {id:1, name:'CARPRO', desc:'Website for the sale used cars', techs:{tech1:'PHP', tech2:'JS', tech3:'HTML', tech4:'SCSS'}, link:'https://carpro.su/'},
                        {id:2, name:'AUTO-BUY-CARS', desc:'Website for the purchase of cars', techs:{tech1:'PHP', tech2:'JS', tech3:'HTML', tech4:'SCSS'}, link:'https://auto-buy-cars.ru/'},
                        {id:3, name:'This site', desc:'Site portfolio', techs:{tech1:'VUE JS'} , github:'https://github.com/ilysha755/IlyaPortfolio.git'},
                        {id:4, name:'Weather-app', desc:'Test task for ARStudio', techs:{tech1:'VUE JS'} , github:'https://github.com/ilysha755/arStidioTestTask'},
                        {id:5, name:'Gbooks-app', desc:'Test task for DigitalMedia', techs:{tech1:'VUE JS', tech2:'Vuex'}, github:'https://github.com/ilysha755/DigitalMediaTestTask'},
                        {id:6, name:'Comment wall', desc:'Test task for ARORA', techs:{tech1:'VUE JS', tech2:'Vuex', tech3:'Webpack'}, github:'https://github.com/ilysha755/ARORA-test-task-'},
                        {id:7, name:'Marico landing page', desc:'One of the first training works', techs:{tech1:'HTML', tech2:'SCSS', tech3:'JS'}, github:'https://github.com/ilysha755/Marico', link:'https://ilysha755.github.io/Marico/'},
                        {id:8, name:'Desk plus', desc:'One of the first training works', techs:{tech1:'HTML', tech2:'SCSS', tech3:'JS'}, github:'https://github.com/ilysha755/Desk-plus', link:'https://ilysha755.github.io/Desk-plus/'},
                        
                    ],
                    modalItem:[],
                    isOpen:false
            }
    }, 
      methods:{
             moreBtn(item){
                     this.modalItem= []
                     this.modalItem.push(item)
                     this.isOpen = true
             },
           
      }  
    
}
</script>
<style lang="scss" scoped>
main{
        width: 100%;
    height: 100%;
    padding-bottom: 110px;
}
.dev__items{
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
}
.dev__item{
        max-width: 375px;
        width: 100%;
        text-align: center;
        position: relative;
        cursor: pointer;
        
        transition: all 0.5s ease;
        &:hover{
               .item__mask{
                       opacity: 1;
               }
        }
}
.item__photo{
        width: 100%;
        img{
                width: 100%;
        }
}
.item__desc{
        margin: 0;
        padding: 0;
}
.item__mask{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.678);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 0;
        transition: all 0.5s ease;
        span{
                display: block;
                width: 150px;
                margin-bottom: 30px;
                border: 2px solid #fff;
                border-radius: 5px;
                padding:10px;
        }
}

@media screen and (max-width: 1464px) {
        .dev__items{
                margin-left: 20px;
                margin-right: 20px;
        }
}

@media screen and (max-width:790px) {
        .dev__item{
                max-width: 100%;
        }       
      .dev__items{
                  padding-bottom: 100px;

      }
}
</style>