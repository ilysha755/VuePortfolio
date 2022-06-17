<template>
    <div class="photobox">
        <slot name="image">
            <img  :src="image" alt="">
        </slot>
        <span class="red-round"></span>
        <span class="red-round-animate"></span>
    </div>
</template>
<script>
export default {
    name:'roundImage'
}
</script>
<style lang="scss" >
.photobox {
    max-width: 530px;
    width: 100%;
    height: 421px;
    max-height: 100%;
    position: relative;
    img{
        width: 100%;
    }
}

.red-round {
    max-width: 430px;
    width: 100%;
    height: 430px;
    max-height: 100%;
    border-radius: 50%;
    border: 40px solid #E40037;
    position: absolute;
    left: -10%;
    bottom: -4%;
    z-index: -1; 
    
}
.red-round-animate {
     max-width: 430px;
    width: 100%;
    height: 430px;
    max-height: 100%;
    border-radius: 50%;
    border: 40px solid #E40037;
    filter: blur(40px);
    position: absolute;
    left: -10%;
    bottom: -4%;
    z-index: -2; 
    animation: pulse 3s ease infinite;
}
@keyframes pulse { 
  0% {     
 filter: blur(0px);
  }   
  50% {     
   filter: blur(100px);
  } 
  100% {
   filter: blur(0px);
   }
}
@media screen and (max-width:894px){
    .red-round,.red-round-animate{
    width: 230px;
    height: 230px;
    }
    .photobox{
    max-width: 330px;
    width: 100%;
    height: 253px;
    max-height: 100%;
    }
}
@media screen and (max-width:450px) {
      .red-round,.red-round-animate{
    width: 190px;
    height: 190px;
    left: 1%;
    }
}
</style>