export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ff33efb87bdab5ac5a99aa9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9cjnmwgt',
                  apiId: 'e799820a-d140-4cdb-9558-5f51e2d9393c'
                },
                {
                  buildHookId: '5ff33efc3c390244d096fef9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-crmodsks',
                  apiId: '4795a36b-d158-44ef-ba9c-3c7190344a1d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fherz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-crmodsks.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
