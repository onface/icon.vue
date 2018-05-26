<template>
  <span :class="getRootClassName()" ></span>
</template>

<script>
var themesClassName = require('themes-classname')
export default {
  name: 'Icon',
  props: {
      type: String,
      themes: {
          type: String,
          default: ''
      },
      prefixClassName: {
          type: String,
          default: 'fi'
      }
  },
  methods: {
      getRootClassName: function () {
        const {type, prefixClassName, themes} = this
        let typeArray = type.split(' ')
        typeArray = typeArray.map(function (item) {
            return 'fi'
        })
        let classNameArray = []
        classNameArray.push(
            `${prefixClassName}-${type}`
        )
        classNameArray.push(
            themesClassName({
                themes,
                prefixClassName
            })
        )
        classNameArray = classNameArray.concat(typeArray)
        return {
            [classNameArray.join(' ')]: true
        }
      }
  },
  data () {
    return {

    }
  }
}
</script>
