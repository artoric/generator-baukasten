const extend = require('deep-extend')

function addDependencies(files = {}) {
    extend(files.pkg, {
        dependencies: {
            'animejs': '^2.0.0',
            'babel-polyfill': '^6.26.0',
            'cookieconsent': '^3.0.4',
            'family.scss': '^1.0.4',
            'fontfaceobserver': '^2.0.9',
            'in-view': '^0.6.1',
            'include-media': '^1.4.4',
            'js-cookie': '^2.1.0',
            'lazysizes': '^3.0.0',
            'lodash': '^4.16.6',
            'macy': '^2.0.0',
            'normalize.css': '^7.0.0',
            'objectFitPolyfill': '^2.0.5',
            'photoswipe': '^4.1.1',
            'smooth-scroll': '^12.1.0',
            'svg-injector-2': '^2.0.0',
            'svgxuse': '^1.1.23',
            'swiper': '^3.0.0',
            'velocity-animate': '^1.3.1',
            'waypoints': '^4.0.0'
        }
    })
}

module.exports = addDependencies
