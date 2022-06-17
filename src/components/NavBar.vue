<template>             
      <nav class="navbar">
          <div class="navbar__container">
                   <h2 class="navbar__name">Ilya <br> <span>Rubtsov</span></h2>
    <div class="navbar__items">
      <router-link to="/" >Home</router-link>
      <router-link to="/about">About</router-link> 
      <router-link to="/works">Works</router-link>
    </div>
    <transition name="navbar">
         <div class="navbar__items_mobile" v-show="this.isOpen">
      <router-link to="/" >Home</router-link>
      <router-link to="/about">About</router-link> 
      <router-link to="/works">Works</router-link>
    </div>
    </transition>
   
    <div class="burger__menu" @click="openMenu"><svg fill="#FF2B51" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg></div>
          </div>      
  </nav>
</template>
<script>

export default {
    name:'navbar',
data(){
  return{
    isOpen:false,
  }
},
methods:{
  openMenu(){
    this.isOpen = !this.isOpen;
  }
},
computed:{


}
}
</script>
<style lang="scss" scoped>
.navbar{
width: 100%;
position: sticky;
left: 0;
top: 0;
z-index: 99999;
background-color: rgba(0, 0, 0, 0.745)
}
.navbar__container{
    max-width: 1560px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.burger__menu{
  display: none;
  z-index: 999999;
}
.navbar__items{
max-width: 386px;
width: 100%;
display: flex;
justify-content: space-between;
text-transform: uppercase;
align-items: center;
margin-right: 20px;
}
.navbar__items_mobile{
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  z-index: 9999;
  right:0;
  top:0;
  height: 100vh;
  width: 50%;
  gap: 40px;
}
.navbar__name{
  color: #FF2B51;
  text-align: end;
    font-weight: 300;
    margin-left: 20px;
    span{
      font-weight: 500;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.router-link-active{
  color: #FF2B51;
  font-size: 26px;
}
.navbar-enter-active, .navbar-leave-active {
  transition: all .3s ease-in-out;
  transform: translateX(0%);
}
.navbar-enter-from, .navbar-leave-to{
  transform: translateX(100%);
  transition: all .3s ease-in-out;
}
@media screen and (max-width: 768px) {
  .navbar__items{
    display: none;
  }
  .navbar__container{
    position: relative;
  }
  .burger__menu{
    display: block;
    position: absolute;
    right: 2%;
    top: 30%;
  }
}
</style>