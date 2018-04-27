const projects = require('./tasks.json').projects;
const _ = require('./lodash');
const args = process.argv.slice(2);
const props = ['name', 'type', 'stage', 'blurb'];
let filters = {};

args.forEach(function(e) {
    esplit = e.split('=');
    if (props.indexOf(esplit[0]) > -1) { filters[esplit[0]] = esplit[1]; }
});

const filteredProjects = _.filter(projects, filters);

const theChosenProject = filteredProjects[Math.floor(Math.random() * filteredProjects.length)];

console.log('You should work on ' + theChosenProject.name);
console.log('It is a ' + theChosenProject.type + ' project ready for ' + theChosenProject.stage);
console.log('Here is a reminder for what it\'s about:');
console.log(theChosenProject.blurb);