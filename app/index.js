'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Deviatry ' + chalk.red('iOS Project') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project',
        default: 'MyProject'
      },
      {
        type: 'input',
        name: 'companyName',
        message: 'Company',
        default: 'MyCompany'
      },
      {
        type: 'input',
        name: 'reverseDomain',
        message: 'Reverse Domain',
        default: 'com.mycompany'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var tp = this.templatePath('Swift-iPhone');

      var files = glob.sync(tp + '/**', {nodir: true});
      files.forEach(function (file) {
        var source = file.slice(tp.length + 1);
        var destination = this.props.projectName + '/' + source.replace(/ProjectName/g, this.props.projectName);

        this.fs.copyTpl(
          tp + '/' + source,
          this.destinationPath(destination),
          this.props
        );

      }, this);

    }
  }
});
