<template>
    <navbar/>

<main> 
  <section class="mainscreen">
    <round-image>
     <template v-slot:image>
    <img src="../assets/main.png"  alt="">
  </template>
  </round-image>
  </section>   
  
  
</main>  
<footer-component/>
</template>

<script>


export default {
    name: 'HomeView',



}
</script>
<style lang="scss" scoped>
main{
   width: 100%;

}
.mainscreen{
  max-width: 1560px;
  margin: 0 auto;
  display: flex;
  height: calc(100vh - 250px);
  align-items: center;
  justify-content: center;
}
@media screen and(max-width:450px) {
  .mainscreen{
    justify-content: end;
  }
}
</style>