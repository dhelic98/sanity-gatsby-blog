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
                  buildHookId: '6011a6b1101bb48d0d2adf57',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4km6dfpx',
                  apiId: '726a7b8f-cbb1-4837-8d6c-18a2e8ccbab7'
                },
                {
                  buildHookId: '6011a6b138b5ef7c29a111e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k1k2c1rg',
                  apiId: '960e117d-b7de-4c6a-ac54-b48880b91058'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dhelic98/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k1k2c1rg.netlify.app', category: 'apps' }
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
