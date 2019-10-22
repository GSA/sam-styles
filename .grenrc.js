module.exports = {
  dataSource: 'prs',
  ignoreLabels: ['npm release', 'ignore'],
  onlyMilestones: false,
  groupBy: {
    'Bug Fixes': ['fix', 'bug'],
    Features: ['feat'],
    'Code Refactoring': ['refactor'],
    Documentation: ['docs'],
    Build: ['build'],
    'Performance Improvements': ['perf'],
    Other: ['closed']
  },
  changelogFilename: 'CHANGELOG.md',
  template: {
    group: "\n### {{heading}}\n",
    issue: function(placeholders) {
      let name = placeholders.name;
      let body = placeholders.body;
      if (name.indexOf(':') !== -1) {
        [type, subject] = name.split(':');
        name = `**${type}:**${subject}`;
      }
      if (placeholders.body) {
        body = `\n\n${body}`;
      }
      return `- ${name.toLowerCase()} [${placeholders.text}](${placeholders.url})${body}`;
    }
  }
};
