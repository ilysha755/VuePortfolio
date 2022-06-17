<template>
    <navbar/>
 <main>
   <section class="about-page">
     <div class="about-info">
                <round-image>
     <template v-slot:image>
    <img src="../assets/exp11.png"  alt="">
  </template>

  </round-image>
  <div class="about__text">
    <h1>About <span>Me</span></h1>
    <p>Hi! I am Ilya Rubtsov, Frontend developer. I create user interfaces. My main task is to create products for a million users. In my free time I travel or create a small car project :)</p>
    <a href="">View CV</a>
  </div>
     </div>
   </section>
   <section class="timeline">
     <div class="timeline__education">
       <h3>Education</h3>
     <div class="timeline-item" v-for="education in education" :key="education.id">
      <div class="timeline-round">
        <div class="round">
          <span class="mini-round"></span>
        </div>
          <p>{{education.time}}</p>
      </div>
      <p>{{education.name}} <br> <span>{{education.desc}}</span></p>
     </div>
       </div>
     <div class="timeline__experience">
       <h3>Experience</h3>
     <div class="timeline-item" v-for="exp in experience" :key="exp.id"> 
      <div class="timeline-round">
        <div class="round">
          <span class="mini-round"></span>
        </div>
          <p>{{exp.time}}</p>
      </div>
      <p>{{exp.name}} <br> <span>{{exp.desc}}</span></p>
     </div>
     </div>
   
   </section>
   <section class="skills">
     <div class="dev-skills" >
       <h2>Development <span>Skills</span></h2>
     <div class="skills-item"  v-for="dev in dev" :key="dev.id">
       <h3>{{dev.name}}</h3>
      <div class="progress">
        <div class="progress__complete" :style="{maxWidth: dev.width}"></div>
      </div>
     </div>
     </div>
     <div class="design-skills" >
       <h2>Design <span>Skills</span></h2>
        <div class="skills-item"  v-for="design in design" :key="design.id">
       <h3>{{design.name}}</h3>
      <div class="progress">
        <div class="progress__complete" :style="{maxWidth: design.width}"></div>
      </div>
     </div>
     </div>
   </section>
 </main>
 <footer-component/>
</template>
<script>
export default {
data(){
  return{
      education:[
      {id:'0',time:'sep 2011 - present', name:'Russian University of Cooperation', desc:'Programmer', },
      {id:'1',time:'sep 2016 - nov 2020', name:'Korolev College of Space Engineering and Technology', desc:'Operator of CNC machines', },
      {id:'2',time:'sep 2020 - nov 2021', name:'Korolev College of Space Engineering and Technology', desc:'Car mechanic', },
    ],
      experience:[
      {id:'0',time:'jan 2022 - present', name:'Lion', desc:'Front-end developer'},
      {id:'1',time:'mar 2021 - jun 2021', name:'VTB bank', desc:'Credit Specialist'},
      {id:'2',time:'dec 2019 - mar 2021', name:'Tinkoff Bank', desc:'Back Office Specialist'},
    ],
    dev:[
      {id:'0',name:'HTML/CSS/SCSS', width:'80%'},
      {id:'1',name:'JavaScript', width:'60%'},
      {id:'2',name:'VUE JS/VUEX', width:'50%'},
    ],
    design:[
      {id:'0',name:'Figma', width:'60%'},
      {id:'1',name:'Photoshop', width:'60%'},
      {id:'2',name:'It will be studied soon...', width:'10%'},
    ]
  }
}
}
</script>
<style lang="scss" scoped>
main{
  width: 100%;
  margin-top: 100px;
    margin-bottom: 130px;
}
.about-page {
  max-width: 1330px;
  margin: 0 auto;

}
.about-info {
    display: flex;

}
.about__text {
    display: flex;
    flex-direction: column;
  h1{
    text-align: center;
  }
  span{
    color:#FF2B51;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height:45px;
    border-radius:4px;
    background-color:#FF2B51;
    align-self: center;
  }
}
.timeline {
  max-width: 1560px;
  margin: 150px auto;
  display: flex;
  justify-content: space-around;
}
.timeline__education {
  max-width: 410px;
  width: 100%;
}
.timeline-item {
  display: flex;
  p{
    max-width: 250px;
    span{
      font-weight: 300;
      display: block;
    }
  }
}
.timeline-round{
    display: flex;
    max-width: 191px;
    align-items:center;
    p{
      max-width: 100px;
    }
}
.round {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #ededed;
  border-radius:50%;
  margin-right: 10px;
  position: relative;
  &::before{
    content: '';
    width: 5px;
    height: 130px;  
    position: absolute;
    bottom: -80%;
    z-index: -1;
    background-color: #fff;
  }
}
.mini-round {
  width: 40px;
  display: block;
  height: 40px;
  background-color: #FF2B51;
  border-radius:50%;
}
.timeline__experience {
  max-width: 410px;
  width: 100%;
  h3{
    margin-bottom: 30px;
  }
}
.skills {
  max-width: 1412px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.dev-skills {
    max-width: 573px;
    width: 100%;
    margin-left: 20px;
    h2{
      span{
        color: #FF2B51;
      }
    }
}
.skills-item {
  max-width: 573px;
}
.progress {
  max-width: 573px;
  width: 100%;
  height: 22px;
  background-color: #ededed;
  position: relative;
}
.progress__complete {
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 22px;
  background-color: #FF2B51;
}
.design-skills {
  max-width: 573px;
  width: 100%;
  margin-right: 20px;
  h2{
    span{
      color:#FF2B51 ;
    }
  }
}

@media screen and (max-width:1322px){
  .about-info{
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
    flex-direction: column;
  }
  .about__text{
    margin-top: 20px;
  }
}
@media screen and (max-width:1195px){
  .skills{
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
  .design-skills{
    margin-top: 30px;
    margin-right: 0;
  }
  .dev-skills{
    margin-left: 0;
  }
}
@media screen and(max-width:766px) {
  .timeline{
    align-items: center;
    flex-direction: column;
  }
  .timeline__experience{
    margin-top: 20px;
  }
}
@media screen and (max-width:450px) {
  .timeline{
    margin-left: 10px;
    margin-right: 10px;
    align-items:flex-end;
  }
 .timeline-item{
   p{
     font-size: 12px;
     max-width: 180px;
     span{
       font-size: 11px;
     }
   }
 } 
 .dev-skills{
   h2{
     font-size: 15px;
   }
 }
  .design-skills{
   h2{
     font-size: 15px;
   }
 }
 .skills-item{
   font-size: 12px;
 }
 .timeline-round{
   p{
     max-width: 80px;
   }
 }
 .round{
   width: 30px;
   height: 30px;
   &::before{
         height: 82px;
   }
 }
 .mini-round{
   width: 20px;
   height: 20px;
 }
}
</style>
