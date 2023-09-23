module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component and story', {
    description: 'generate component file and storybook file',
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
