const BasicGenerator = require('../../BasicGenerator');

module.exports = class Generator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'name',
        message: `What's the plugin name?`,
        default: this.name,
      },
      {
        name: 'isTypeScript',
        type: 'confirm',
        message: 'Do you want to use typescript?',
        default: false,
      },
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  writing() {
    this.writeFiles({
      context: this.prompts,
      filterFiles: f => {
        const { isTypeScript } = this.prompts;
        if (isTypeScript) {
          return !f.endsWith('.js');
        } else {
          return !this.isTsFile(f);
        }
      },
    });
  }
};
