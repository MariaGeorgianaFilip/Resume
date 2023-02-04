const express = require(`express`)
const app = express ()
const PORT = 3031
const server = app.listen(PORT, function() {console.log(`server started at ${PORT}`)})

app.get('/api/resume/:name', function(req,res){

    const data = {
     maria: {
        name:'Maria',
        role:'Frontend Dev',
        surname:'Filip',
        email:'mariageorgianafilip@gmail.com',
        phone:'+40735526394',
        about: {
            title: 'ABOUT ME',
            details: `<i> “The things you are passionate about are not random, they are calling.” Fabiene Fredrickson</i>  
             <br/>
             `
        },
        work: {
            title: 'WORK EXPERIENCE',
            details:` My journey in the IT field started 1 year ago, as I discovered my passion for web developement. The past 10 years working as a lawyer shaped me into being organised and self-motivated, so I put what I know into action and with a mix of self-learning and code school I have I got my certification.
            Seeing how a design came into shape, from a simple sketch or wireframe captivated me from the first contact with this field. And the thrill of applying creative ideas, code and see the results of my work in real time, got me craving for more once the course ended. During my frontend developer course, I have worked with both React and Vue.js frameworks, coming to the conclusion that i prefer Vue.js for minimal template syntax.`
        },
        soft_skills: {
            title: 'SOFT SKILLS',
            details: `Great Adaptability
            Communication
            Growth Mindset
            Attention to details
            Research Skills
            Analytical Skills`         
        },
        special_skills: {
            title: 'LANGUAGES',
            details:`ENGLISH -<br/>
            SPANISH - <br/>
            FRENCH - <br/>`
            
        },
        skills: [
            {
                name: 'HTML',
                rate: 7
            },
            {
                name: 'CSS',
                rate: 6
            },
            {
                name: 'JAVASCRIPT',
                rate: 6
            },
            {
                name: 'VUE.jS',
                rate: 6
            },
            {
                name: 'REACT.JS',
                rate: 5
            },
            {
                name: 'VUE.JS',
                rate: 7
            },
            {
                name: 'GIT',
                rate: 7
            },
            {
                name: 'NPM/YARN',
                rate: 6
            },
            {
                name: 'FIGMA',
                rate: 6
            },
           ],
        educations: {
            title:'EDUCATION',
            details:`
            HighSchool
            <br/> 
            Law School
            </br>
            IT School`
        },
        personal_projects: {
            title:'PERSONAL PROJECTS',
            details:`
            LORGA
            An eCommerce Website for perfumes
            
            MOONDALI
            Booking your next yoga retreat!
            
            FVC Attorneys at Law
            A leading Romanian law firm’s website
            `
        }}}
    const name = req.params.name
    res.send(data[name])
})