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

// ACTION
const renderTitle = (title, license) => {
    return `#${title} ![GitHublicense](http://img.shields.io/badge/license-${license}-blue.svg)`
};

const renderDescription =(description) => {
    return `## Description;
    ${description}`
};

const renderTableofcontents =() => {
    return `##Table of Contents
    [Instructions](#instructions)

    [Usage](#usage)

    [Contributing](#contributions)

    [Test](#test)

    [License](#license)

    [GitHub](#gitHub)`
};

const renderinstallation = (installation) => {
    return `## Installation
    ${installation}`
};

const renderInstructions = (instructions) => {
    return `## Instructions
    ${instructions}`
};

const renderUsage = (usage) => {
    return `## Usage
    ${usage}`
};

const renderContributing = (contributing) => {
    return `## Contributing
    ${contributing}`
};

const renderTest = (test) => {
    return `## Test
    ${test}`
};

const renderLicense = (license) => {
    return `## License
    ![GitHub license](http://img.shields.io/badge/license-${license}-blue.svg)`
};

const renderGitHub = (gitHub) => {
    return `## GitHub Username
    ${gitHub}`
};

const renderBaseTemplate = (
    titleTemplate,
    decriptionTemplate,
    TableofcontentsTemplate,
    installationtemplate,
    usageTemplate,
    contributingTemplate,
    testTemplate,
    licenseTemplate,
    gitHubTemplate,
) => {
    return `${titleTemplate}
    ${descriptionTemplate}
    ${TableofcontentsTemplate}
    ${installationTemplate}
    ${instructionsTemplate}
    ${usageTemplate}
    ${contributingTemplate}
    ${testTemplate}
    ${gitHubTemplate}`
};
var questions = [{
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
    {
        type: 'input',
        message: 'How do you test your project?',
        name: 'test',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('Provide a test for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
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
    {
        type: 'input',
        message: 'How is your project used?',
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
    {
        type: 'input',
        message: 'What is the contributions for your project?',
        name: 'contributing',
        validate: your_contributions => {
            if (your_contributions) {
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
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        validate: your_github => {
            if (your_github) {
                return true;
            } else {
                console.log('Provide your github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: your_email => {
            if (your_email) {
                return true;
            } else {
                console.log('Provide your email address');
                return false;
            }
        }
    },
];
inquirer.prompt(questions)
.then(({title, description, installation, instructions, usage,contributing,test, license, gitHub}) =>{
    
    const titleTemplate = renderTitle(title, license);
    const descriptionTemplate = renderDescription(description);
    const TableofcontentsTemplate = renderTableofcontents();
    const installationTemplate = renderinstallation(installation);
    const instructionsTemplate = renderInstructions(instructions);
    const usageTemplate = renderUsage(usage);
    const contributingTemplate = renderContributing(contributing);
    const testTemplate = renderTest(test);
    const licenseTemplate = renderLicense(license);
    const gitHubTemplate =renderGitHub(gitHub);
    const baseTemplate = renderBaseTemplate(
        titleTemplate,
        descriptionTemplate,
        TableofcontentsTemplate,
        installationTemplate,
        instructionsTemplate,
        usageTemplate,
        contributingTemplate,
        testTemplate,
        licenseTemplate,
        gitHubTemplate,
    );
    outputREADME(baseTemplate);

})



