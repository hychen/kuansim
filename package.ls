#!/usr/bin/env lsc -cj
author: 'Chia-liang Kao'
name: 'angular-brunch-seed-livescript'
description: 'AngularJS + Brunch + LiveScript'
version: '0.1.1'
homepage: 'https://github.com/clkao/angular-brunch-seed-livescript'
repository:
  type: 'git'
  url: 'https://github.com/clkao/angular-brunch-seed-livescript'
engines:
  node: '0.8.x'
  npm: '1.1.x'
scripts:
  prepublish: './node_modules/.bin/lsc -cj package.ls'
  start: './node_modules/.bin/brunch watch --server'
  test: 'karma start test/karma.conf.js'
dependencies: {}
devDependencies:
  karma: '>= 0.8.4'
  LiveScript: '>= 1.1.1'
  brunch: '1.5.x'
  'javascript-brunch': '1.5.x'
  'LiveScript-brunch': '1.5.x'
  'css-brunch': '1.5.x'
  'sass-brunch': '1.5.x'
  'jade-brunch': '1.4.x'
  'static-jade-brunch': '>= 1.4.0 <= 1.4.5 || >= 1.4.8 < 1.5'
  'auto-reload-brunch': '1.5.x'
  'uglify-js-brunch': '1.3.x'
  'clean-css-brunch': '1.5.x'
