const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaExtension {
  name() {
    return 'nova-extension'
  }

  register(name) {
    this.name = name
  }

  webpackPlugins() {
    return new webpack.ProvidePlugin({
      _: 'lodash',
      Errors: 'form-backend-validation',
    })
  }

  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      vue: 'Vue',
    }

    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      'laravel-nova': path.join(
        __dirname,
        '../../vendor/laravel/nova/resources/js/mixins/packages.js'
      ),
      '@/mixins': path.join(
          __dirname,
          '../../vendor/laravel/nova/resources/js/mixins/'
      ),
      '@/util': path.join(
          __dirname,
          '../../vendor/laravel/nova/resources/js/util/'
      ),
      'laravel-nova-ui': path.join(
          __dirname,
          '../../vendor/laravel/nova/node_modules/laravel-nova-ui/'
      ),
    }

    webpackConfig.output = {
      uniqueName: this.name,
    }
  }
}

mix.extend('nova', new NovaExtension())
