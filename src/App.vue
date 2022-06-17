<template>
<router-view/>


 
 

</template>
<script>

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

body{
  padding: 0;
  margin: 0;
  font-family:'Poppins', sans-serif;
  background-color: #000;
  color: #fff;
       &::-webkit-scrollbar {
        width: 12px; 
        height: 8px; 
        background-color: #ededed;
    }
        &::-webkit-scrollbar-thumb {
        background-color: #FF2B51;
        border-radius: 0px 0px 10px 10px;
    }
}
a, li{
  text-decoration: none;
  color: #fff;
}

</style>
