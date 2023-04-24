// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License Badge](https://img.shields.io/badge/license-${license}-purple.svg)`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.desc}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Links](#links)
  - [Contact](#contact)

  ### Installation

  ${data.installation}

  ### Usage

  ${data.usage}

  ### Tests

  ${data.test}

  ### License

  This project is using ${data.license} license. More information at [Licenses](https://choosealicense.com/licenses/${data.license}).

  ### Credits

  ${data.credits}

  ### Links

  You can find my deployed website at ${data.links}

  ### Contact

  You can find more of my work at [${data.github}](https://github.com/${data.github})

  `;
}

module.exports = generateMarkdown;
