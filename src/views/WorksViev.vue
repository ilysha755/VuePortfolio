<template>
        <navbar/>
        <main>
            <section class="works">
                <div class="dev-works" @click="$router.push({name:'WebDev'})">
                <div class="dev__img">
                    <img src="../assets/webdev.png" alt="">
                </div>
                    <h2>Web Dev</h2>
                </div>
                <div class="design-works" @click="$router.push({name:'Design'})">
                <div class="design__img">
                    <img src="../assets/design.png" alt="">
                </div>
                    <h2>Web Design</h2>
                </div>
            </section>
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
.works {
    max-width: 1560px;
    margin: 150px auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.dev-works {
    max-width: 430px;
        width: 100%;
        max-height:356px;
        height  :100%;
        text-align: center;
        padding: 30px;
        transition: all 0.4s ease;
        cursor: pointer;
        &:hover{
        -webkit-box-shadow: 0px 0px 21px 9px rgba(255, 255, 255, 0.13);
-moz-box-shadow: 0px 0px 21px 9px rgba(255, 255, 255, 0.13);
box-shadow: 0px 0px 21px 9px rgba(255, 255, 255, 0.13);
        transition: all 0.4s ease;
        }
}
.design-works {
      max-width: 430px;
        width: 100%;
        max-height:356px;
        height  :100%;
        text-align: center;
        padding: 30px;
        transition: all 0.4s ease;
        cursor: pointer;
        &:hover{
        -webkit-box-shadow: 0px 0px 21px 9px rgba(255, 255, 255, 0.13);
-moz-box-shadow: 0px 0px 21px 9px rgba(255, 255, 255, 0.13);
box-shadow: 0px 0px 21px 9px rgba(255, 255, 255, 0.13);
        transition: all 0.4s ease;
        }
}

</style>