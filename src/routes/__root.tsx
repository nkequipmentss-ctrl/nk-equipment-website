import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'NK Equipments Solution | Used Heavy Machinery Importer Pakistan',
      },
      {
        name: 'description',
        content: 'NK Equipments Solution imports and supplies premium used excavators, loaders, bulldozers, graders, cranes and construction equipment from Japan, Korea, Europe and the USA.',
      },
      {
        name: 'keywords',
        content: 'used heavy machinery Pakistan, construction equipment importer, excavators for sale Pakistan, wheel loader, bulldozer, Komatsu, Caterpillar',
      },
      {
        property: 'og:title',
        content: 'NK Equipments Solution — Trusted Global Heavy Machinery Importer',
      },
      {
        property: 'og:description',
        content: 'Premium used construction and earthmoving equipment sourced worldwide and supplied throughout Pakistan.',
      },
      {
        name: 'theme-color',
        content: '#090b0a',
      },
      {
  property: 'og:type',
  content: 'website',
},
{
  property: 'og:url',
  content: 'https://nkequipments.com/',
},
{
  property: 'og:image',
  content: 'https://nkequipments.com/og-image.jpg',
},

{
  property: 'og:image:width',
  content: '1200',
},
{
  property: 'og:image:height',
  content: '630',
},
{
  property: 'og:image:type',
  content: 'image/jpeg',
},
{
  property: 'og:image:alt',
  content: 'NK Equipments Solution',
},
{
  property: 'og:site_name',
  content: 'NK Equipments Solution',
},
{
  name: 'twitter:card',
  content: 'summary_large_image',
},
{
  name: 'twitter:title',
  content: 'NK Equipments Solution',
},
{
  name: 'twitter:description',
  content: 'Trusted Importer of Premium Used Heavy Machinery',
},
{
  name: 'twitter:image',
  content: 'https://nkequipments.com/og-image.jpg',
},
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
