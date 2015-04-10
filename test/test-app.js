'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('Deviatry iOS:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({skipInstall: true})
      .withPrompts({projectName: 'Testy'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'Testy/Application/AppDelegate.swift',
      'Testy/Application/Images.xcassets/AppIcon.appiconset/Contents.json',
      'Testy/Application/Info.plist',
      'Testy/Controller/ViewController.swift',
      'Testy/Extensions/readme.md',
      'Testy/Functions/readme.md',
      'Testy/Layout/LaunchScreen.xib',
      'Testy/Layout/Main.storyboard',
      'Testy/Model/readme.md',
      'Testy/Services/readme.md',
      'Testy/Tests/Info.plist',
      'Testy/Tests/Tests.swift',
      'Testy/View/readme.md',
      'Testy/Testy.xcodeproj/project.pbxproj',
      'Testy/Testy.xcodeproj/project.xcworkspace',
      'Testy/Testy.xcodeproj/xcshareddata/xcschemes/Testy.xcscheme'
    ]);
  });

  it('replaces text', function () {

  });
});
