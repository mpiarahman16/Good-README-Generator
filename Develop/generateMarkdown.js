function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license, data.username, data.title)}

## Description
${data.description}

## Table of contents

Installation 

Usage

License

Contributing

Test

Questions

## Installation 

To install dependencies run the following command 

${data.installation}

## Usage 

${data.usage}

## License

${renderLicense(data.license)}

## Contributing 

${data.contributing}

## Test

To run test run the following command 

${data.test}

## Questions

If you have questions then contact ${data.email}.

`;
}
function renderLicenseBadge(license, github, title) {
  if (license) {
    return `[![github license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateUrl(github, title)})`
  }
  return ""
}
function renderLicense(license) {
  if (license) {
    return (`## License
    
This project is licensed under the ${license} license.
    `)
  }
  return ""
}


function generateUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}


module.exports = generateMarkdown;