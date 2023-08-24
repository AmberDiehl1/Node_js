// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license == 'APACHE2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  else if (license == 'GPL3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
  else if (license == 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  } else  {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license == 'MIT') {
  return 'https://opensource.org/licenses/MIT'
} else if (license == 'APACHE2.0') {
  return 'https://opensource.org/licenses/Apache-2.0'
}
else if (license == 'GPL3.0') {
  return 'https://www.gnu.org/licenses/gpl-3.0'
}
else if (license == 'BSD 3') {
  return 'https://opensource.org/licenses/BSD-3-Clause'
} else  {
  return ''
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
   ${data.description}
  ## Table of Contents
  - [title](#${data.title})
  - [description](#description)
  - [installation](#installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseLink(data.license)}
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.test}
  ## Questions
  - Github: ${data.github}
  Please contact me via my email with further questions: ${data.email}
  
`;
}

module.exports = generateMarkdown;
