Package.describe({
  name: 'tinque:angular-translate',
  version: '2.7.0',
  summary: 'This is the Meteor package for angular-translate',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('angular-translate.min.js');
});
