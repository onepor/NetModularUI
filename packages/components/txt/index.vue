<template>
    <div :class="['nm-txt', 'nm-text-' + this.type, 'nm-size-' + this.size, { 'nm-text-icon': icon }]">
        <nm-icon v-if="icon" :name="type" />
        <slot>{{ text }}</slot>
    </div>
</template>
<script>
export default {
  name: 'Txt',
  props: {
    // 文本
    text: String,
    // 类型 primary\success\warning\danger
    type: {
      type: String,
      default: 'warning'
    },
    /** 显示图标 */
    icon: Boolean,
    /** 字体大小 */
    size: {
      type: [Number, String],
      default: 12
    }
  }
}
</script>
