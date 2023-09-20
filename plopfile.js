module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'どこにStoryファイルを置きますか？(例: src/components/)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください。',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'plop-templates/stories.tsx.hbs',
      },
    ],
  })
}
