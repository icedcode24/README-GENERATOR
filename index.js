// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// for output readme file
const outputREADME = (readMe) => {
    fs.writeFile('README2.md', readMe, (err) => {
        if (err) console.log(err);
        console.log('Success');
    })
};
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: your_title => {
            if (your_title) {
                return true;
            } else {
                console.log('Provide a title for your project');
                return false;
            }
        }
    },
    {type: 'input',
    message: 'What is the installation process for your project?',
    name: 'installation',
    validate: your_installation => {
        if (your_installation) {
            return true;
        } else {
            console.log('Provide a installation process for your project');
            return false;
        }
    }
    },
    {type: 'input',
    message: 'What is the usage for your project?',
    name: 'usage',
    validate: your_usage => {
        if (your_usage) {
            return true;
        } else {
            console.log('Provide the usage of your project');
            return false;
        }
    }
    },
    {type: 'input',
    message: 'What is the contributions for your project?',
    name: 'contributing',
    validate: your_usage => {
        if (your_usage) {
            return true;
        } else {
            console.log('Provide the contributions for your project');
            return false;
        }
    }
    },
{
    type: 'input',
        message: 'How would you describe your project?',
            name: 'description',
                validate: your_description => {
                    if (your_description) {
                        return true;
                    } else {
                        console.log('Provide a description for your project');
                        return false;
                    }
                }
},
{
    type: 'input',
        message: 'where are the table of contents for your project?',
            name: 'tableofcontents',
                validate: your_tableofcontents => {
                    if (your_tableofcontents) {
                        return true;
                    } else {
                        console.log('Provide a tableofcontents for your project');
                        return false;
                    }
                }
},
{
    type: 'checkbox',
        message: 'Which license is your project covered under?',
            name: 'license',
                choices: [
                    'BSD',
                    'MIT',
                    'GPL',
                    'ISC',
                ],
                    validate: your_license => {
                        if (your_license) {
                            return true;
                        } else {
                            console.log('Select a license for your project');
                            return false;
                        }
                    }
}
];


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
outputREADME()
