module.exports = {
  label: 'Footer',
  status: 'wip',
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        agency: 'Name of Agency',
        logo: '/assets/images/logo-img.png',
        navigation: [
          {
            header: 'Topic',
            links: [
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              },
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              },
              {
                text: `Secondary link that's a bit longer than most of the others`,
                href: 'javascript:void(0);'
              },
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              }
            ]
          },
          {
            header: 'Topic',
            links: [
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              },
              {
                text: `Secondary link that's pretty long`,
                href: 'javascript:void(0);'
              },
              {
                text: `Secondary link`,
                href: 'javascript:void(0);'
              },
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              }
            ]
          },
          {
            header: 'Topic',
            links: [
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              },
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              },
              {
                text: `Secondary link`,
                href: 'javascript:void(0);'
              },
              {
                text: 'Secondary link',
                href: 'javascript:void(0);'
              }
            ]
          }
        ],
        note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh
        sapien, ultrices et efficitur eu, aliquet in sem. Ut vestibulum
        elementum enim, at <strong>"ELEMENTUM VELIT PRETIUM"</strong> a. In
        suscipit felis at dui aliquet, ut pharetra sapien condimentum. Ut
        vulputate scelerisque purus ut condimentum.`
      }
    },
    {
      name: 'GSA',
      label: 'GSA',
      context: {
        agency: 'General Services Administration',
        logo: '/assets/images/logo-gsa.svg',
        navigation: [
          {
            header: 'Our Website',
            links: [
              {
                text: 'About This Site',
                href: 'javascript:void(0);'
              },
              {
                text: 'Release Notes',
                href: 'javascript:void(0);'
              },
              {
                text: 'Alerts',
                href: 'javascript:void(0);'
              },
              {
                text: 'News',
                href: 'javascript:void(0);'
              }
            ]
          },
          {
            header: 'Our Partners',
            links: [
              {
                text: 'Aquisition.gov',
                href: 'javascript:void(0);',
                external: true
              },
              {
                text: 'USASpending.gov',
                href: 'javascript:void(0);',
                external: true
              },
              {
                text: 'Grants.gov',
                href: 'javascript:void(0);',
                external: true
              },
              {
                text: 'More Partners',
                href: 'javascript:void(0);'
              }
            ]
          },
          {
            header: 'Customer Service',
            links: [
              {
                text: 'Help',
                href: 'javascript:void(0);'
              },
              {
                text: 'Contact Federal Service Desk',
                href: 'javascript:void(0);',
                external: true
              },
              {
                text: 'Our Community',
                href: 'javascript:void(0);',
                external: true
              },
              {
                text: 'Policy',
                href: 'javascript:void(0);'
              }
            ]
          }
        ],
        note: `This is a U.S. General Services Administration Federal Government
        computer system that is <strong>"FOR OFFICIAL USE ONLY."</strong> This
        system is subject to monitoring. Individuals found performing
        unauthorized activities are subject to disciplinary action including
        criminal prosecution.`
      }
    }
  ]
};
