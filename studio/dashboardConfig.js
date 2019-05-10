export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd51c210d84ab82faee7855',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages566-studio',
                  apiId: '46ca969b-1816-4fb8-8f50-dab0e0c4cb5b'
                },
                {
                  buildHookId: '5cd51c213efbb75db1bebae9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages566',
                  apiId: 'ea3a4054-45ea-4741-b076-1f990aa6801f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-nextjs-landing-pages566',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages566.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
