module.exports = [
  {
    title: 'Getting Started',
    collapsible: false,
    children: ['introduction'],
  },
  {
    title: 'Projects',
    collapsible: false,
    children: prefix('projects', [
      'the-basics',
      'environments',
      'deployments',
      'development',
    ]),
  },
  {
    title: 'Resources',
    collapsible: false,
    children: prefix('resources', [
      'queues',
      'storage',
      'networks',
      'databases',
      'caches',
    ]),
  },
  {
    title: 'Domains',
    collapsible: false,
    children: prefix('domains', [
      'registrar',
      'dns',
      'certificates',
    ]),
  },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
