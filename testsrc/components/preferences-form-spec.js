
const test = require('zopf')
const proxyquire = require('proxyquire')

const sd = require('./skin-deeper')
const stubs = require('../stubs/react-stubs')

test('PreferencesForm', t => {
  let PreferencesForm = proxyquire('../../app/components/preferences-form', stubs)
  let appdata = {
    name: 'appdata',
    size: -1,
    free_space: 202006237184,
    item_count: 0,
    computing_size: false,
    path: ''
  }
  let state = {
    install_locations: {
      aliases: [
        ['', '~']
      ],
      default: 'appdata',
      locations: { appdata }
    }
  }

  let tree = sd.shallowRender(sd(PreferencesForm, { state }))
  let instance = tree.getMountedInstance()
  // TODO: finish writing test
  instance = instance
})
