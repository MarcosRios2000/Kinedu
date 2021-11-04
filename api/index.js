const axios = require('axios')
const server = require('./src/app.js');
const { conn, Area, Milestone } = require('./src/db.js');
const {
  TOKEN,
} = process.env;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    axios.get("http://staging.kinedu.com/api/v3/skills/2/milestones", {
 headers: {
   Authorization: TOKEN 
  }
})
 .then(({data})=>{
   const infoPh = data.data.skill
   const PhMilestones = infoPh.milestones
   const physical = {
     id: infoPh.id,
     age_range: infoPh.age_range,
     title: infoPh.title,
     description: infoPh.description,
   }
   Area.create(physical)
   const milestones = PhMilestones.map(el=> {
     return {
       id: el.id,
       title: el.title,
       description: el.description,
       status: "Not answered"
     }
   })
    milestones.forEach(el => {
      return Milestone.create(el)
      // setAreas(physical.id)
       .then(response => response.setArea(physical.id))
    })
    console.log("Preloaded Physical milestones")
 })
 axios.get("http://staging.kinedu.com/api/v3/skills/23/milestones", {
 headers: {
   Authorization: TOKEN 
  }
})
 .then(({data})=>{
   const infoSe = data.data.skill
   const SeMilestones = infoSe.milestones
   const social = {
     id: infoSe.id,
     age_range: infoSe.age_range,
     title: infoSe.title,
     description: infoSe.description,
   }
   Area.create(social)
   console.log("Preloaded Areas")
   const milestones = SeMilestones.map(el=> {
     return {
       id: el.id,
       title: el.title,
       description: el.description,
       status: "Not answered"
     }
   })
    milestones.forEach(el => {
      return Milestone.create(el)
      // setAreas(physical.id)
       .then(response => response.setArea(social.id))
    })
    console.log("Preloaded Social & Emotional milestones")
 })

    server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
