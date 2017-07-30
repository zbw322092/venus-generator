const generator = require("yeoman-generator");
const chalk = require('chalk');

module.exports = generator.extend({
  constructor() {
    generators.apply(this, arguments);
  },

  venusPrompting() {
    const questions = [
      // framework
      {
        type: 'list',
        name: 'framework',
        message: 'Which Javascript framework would you like to use?',
        choices: [
          {name: 'Angular.js 1', value: 'Angular.js 1'},
          {name: 'Agility.js', value: 'Agility.js'},
          {name: 'React.js', value: 'React.js'}
        ]
      },
      // project
      {
        type: 'list',
        name: 'project',
        message: 'which kind of Project would you like to initialise?',
        choices: (answers) => {
          let choicesList;
          switch (answers.framework) {
            case 'Angular.js 1':
              choicesList = [
                {name: 'activities(including activities in hyrbid and activities in wx)', value: 'activities'},
                {name: 'hybrid', value: 'hybrid'},
                {name: 'weixin', value: 'weixin'}
              ]
              break;
            
            case 'Agility.js':
              choicesList = [
                {name: 'PC', value: 'PC'}
              ]
              break;
            
            case 'React.js':
              choicesList = [
                {name: 'TODO', value: 'TODO'}
              ]
              break;
          }
          
          return choicesList;
        }
      },
      // JS preprocessor
      {
        type: 'list',
        name: 'js',
        message: 'which kind of Javascript preprocessor would you like to use?',
        choices: [
          {name: 'ES6 with Babel', value: 'ES6'},
          {name: 'TypeScript', value: 'typescript'},
          {name: 'ES5', value: 'ES5'}
        ]
      },
      // CSS preprocessor
      {
        type: 'list',
        name: 'css',
        message: 'which kind of CSS preprocessor would you like to use?',
        choices: [
          {name: 'LESS', value: 'LESS'},
          {name: 'CSS', value: 'CSS'}
        ]
      }
    ];

    return this.prompt(questions)
      .then(props => {
        console.log(props);
      });
  }
});