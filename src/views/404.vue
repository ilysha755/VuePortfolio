<template>
   <navbar/>
    <main>
        <div class="nf__container">
           <div class="nf__top">
            <span class="number">4</span>
                           <round-image>
     <template v-slot:image>
    <img src="../assets/nf.png"  alt="">
  </template>
  </round-image>
            <span class="number">4</span>
           </div>
        </div>
    </main>
      <footer-component/>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
main{
    width: 100%;
}
.nf__container {
    max-width: 1200px;
    margin: 0 auto;
    h3{
        text-align: center;
        font-size: 50px;
    }
}
.nf__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.number {
    display: block;
    font-size: 400px;
    margin-right: 50px;
}
@media screen and (max-width:1148px) {
    .nf__container{
         margin-bottom: 150px;
    }

.nf__top{
        flex-direction: column;
    }
    .number{
        font-size: 300px;
    }
}
</style>