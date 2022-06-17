<template>
        <navbar/>
        <main>
                <div class="design__items">
       <div class="design__item" v-for="item in DesignWorks" :key="item.id">
                      <div class="item__photo">
                                <img :src="require(`@/assets/${item.name.toLowerCase().replace(/ /g,'')}.png`)" :alt="item.desc"/>
                        </div>
                        <p>{{item.name}}</p>
                </div>
                </div>
         
        </main>
        <footer-component/>
</template>
<script>
export default {
    data(){
            return{
                       DesignWorks:[
                        {id:0, name:'This site', desc:'My web porfolio>'},
                        {id:1, name:'CARPRO', desc:'Website for the sale used cars'},
                        {id:2, name:'This may be our work with you', desc:'This may be our work with you!'},
                    
                    ]
            }
    }
}
</script>
<style lang="scss" scoped>
main{
        width: 100%;
}
.design__items{
             max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
}
.design__item{
         max-width: 375px;
        width: 100%;
        text-align: center;
        position: relative;
}
.item__photo{
        width: 100%;
        img{
                width: 100%;
        }
}
@media screen and (max-width:1444px){
        .design__items{
                margin-left: 20px;
                margin-right: 20px;
        }
}
@media screen and (max-width:794px){
        .design__item{
                max-width: 100%;
        }
}
</style>