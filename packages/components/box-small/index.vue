<template>
  <div :class="class_" :style="style_">
    <div class="inner">
      <div class="value">
        {{value}}
        <span v-if="unit" class="unit">{{unit}}</span>
      </div>
      <div v-if="label" class="label">{{label}}</div>
    </div>
    <div v-if="icon" class="icon">
      <nm-icon :name="icon" />
    </div>
    <nm-button v-if="more" class="more" @click="onMore">
      更多
      <nm-icon name="arrow-right" />
    </nm-button>
  </div>
</template>
<script>
export default {
  name: 'BoxSmall',
  props: {
    /** 文本 */
    label: String,
    /** 值 */
    value: [String, Number],
    /** 单位 */
    unit: String,
    /** 图标 */
    icon: String,
    /** 显示更多 */
    more: Boolean,
    /** 背景色 */
    bgColor: {
      type: String,
      default: 'success'
    }
  },
  computed: {
    class_() {
      let classArr = ['nm-box-small']
      if (this.includeBgColor) {
        classArr.push(`nm-bg-${this.bgColor}`)
      }
      return classArr
    },
    style_() {
      let style = {}
      if (!this.includeBgColor) {
        style.backgroundColor = this.bgColor
      }
      return style
    },
    includeBgColor() {
      return ['success', 'primary', 'info', 'warning', 'danger'].includes(this.bgColor)
    }
  },
  methods: {
    onMore() {
      this.$emit('more')
    }
  }
}
</script>
