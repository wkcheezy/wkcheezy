//Thanks to Thomas Guibert for the guide on creating an interactive README
//Guide can be found here: https://medium.com/swlh/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91
//and you can find him on github: https://github.com/thmsgbrt

const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
    name: 'William Kuzniarz',
    pronouns: 'he/him',
    occupation: 'an Information Technology student 👨‍🎓',
    location: 'Ottawa, Canada 🍁',
    current_job: 'Employment and Social Development Canada (ESDC) as a Junior Analyst in their Cloud Center of Excellence (CCoE) ☁',
    past_jobs: false,
    email: 'wkhappiness@gmail.com',
    twitter: 'https://twitter.com/wkcheezy',
    linkedin: 'https://www.linkedin.com/in/william-kuzniarz-455b0414a/'
};

function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
} generateReadMe();