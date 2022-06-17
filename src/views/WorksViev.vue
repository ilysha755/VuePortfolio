<template>
        <navbar/>
        <main>
            <section class="works">
                <div class="dev-works" @click="$router.push({name:'WebDev'})">
                    <h2>WebDev</h2>
                </div>
                <div class="design-works" @click="$router.push({name:'Design'})">
                    <h2>WebDesign</h2>
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
}
.dev-works {
    max-width: 430px;
        width: 100%;
        max-height:356px;
        height  :100%;
        text-align: center;
        background:red;
}
.design-works {
      max-width: 430px;
        width: 100%;
        max-height:356px;
        height  :100%;
        text-align: center;
        background:red;
}

</style>