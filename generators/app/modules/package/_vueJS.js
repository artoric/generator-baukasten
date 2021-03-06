const extend = require('deep-extend')

function addVueJS(files = {}) {
    extend(files.pkg, {
        dependencies: {
            'axios': '^0.16.2',
            'vue': '^2.4.2',
            "vue-axios": "^2.0.2",
            'vue-router': '^2.7.0',
            'vuex': '^2.3.1',
            "vuex-router-sync": "^4.1.2"
        }
    })
}

module.exports = addVueJS
