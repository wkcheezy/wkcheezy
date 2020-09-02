//Thanks to Thomas Guibert for the guide on creating an interactive README
//Guide can be found here: https://medium.com/swlh/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91
//and you can find him on github: https://github.com/thmsgbrt

const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
    name: 'Thomas',
    date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Europe/Stockholm',
    }),
};

function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
} generateReadMe();