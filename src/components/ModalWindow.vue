<template>
<transition name="modal">
<div class="modal" v-show="isOpen" @click.self="isOpen = false">
    <div class="modal__container" v-for="item in modalInfo" :key="item.id" >
        <img :src="require(`@/assets/${item.name.toLowerCase().replace(/ /g,'')}.png`)" />
        <div class="modal__desc">
            <h3>{{item.name}}</h3>
            <p>{{item.desc}}</p>
        </div>
        <div class="modal__techs-links">
            <div class="modal__techs">
                <span class="modal__techs_item" v-for="techs in item.techs" :key="techs.index">
                    {{techs}}
                    </span>
            </div>
            <div class="modal__links">
             <a :href="item.link" v-if="item.link != null">Live demo</a>
             <a :href="item.github" v-if="item.github != null">Github</a>
            </div>
        </div>
    </div>
</div>
</transition>


</template>
<script>
export default {
    name:'ModalComponent',
    props:{
        modalInfo:{
            type: Array,
            required: true
        },
    isOpen:{
            type: Boolean,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.modal{
    width:100%;
    height:100vh;
    position:fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    background-color:rgba(0, 0, 0, 0.589);

    
    }
    .modal__container{
        max-width: 1000px;
        background-color: #fff;
        color: #000;
        max-height: 550px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        width: 12px; 
        height: 8px; 
        background-color: #ededed;
    }
        &::-webkit-scrollbar-thumb {
        background-color: #FF2B51;
        border-radius: 0px 0px 10px 10px;
    }
        img{
            width: 100%;
        }
    }
.modal__desc {
    text-align: center;
    h3,p{
        margin: 0;padding: 0;
        text-transform: uppercase;
    }
}
.modal__techs-links {
    display: flex;
    justify-content: space-between;
    padding:20px;
}
.modal__techs {
    display: flex;
}
.modal__techs_item {
    display: block;
    margin-right: 10px;
    padding: 10px;
    color: #fff;
    border-radius: 10px;
    background-color: #FF2B51;
}
.modal__links {
    display: flex;
    a{
        background-color: #FF2B51;
        padding: 10px;
        display: block;
        color: #fff;
        margin-left: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
}
.modal-enter-active, .modal-leave-active {
  transition: opacity .3s;
}
.modal-enter-from, .modal-leave-to{
  opacity: 0;
}
@media screen and (max-width: 1051px) {
    .modal__container{
        margin-left: 20px;
        margin-right: 20px;
    }   
}
@media screen and (max-width:542px ) {
    .modal__techs-links{
        flex-direction: column;
    }
    .modal__links{
        a{
            margin-left: 0;
            margin-right: 10px;
            margin-top: 20px;
            font-size: 12px;
        }
    }
    .modal__desc{
        h3,p{
            font-size: 12px;
        }
    }
    .modal__techs_item{
        font-size: 12px;
    }
}
</style>