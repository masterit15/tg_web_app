<template>
    <div :class="['c-toasts__item', 'c-toasts__item--' + toast.type]" >
      <span class="c-toasts__item-text">{{ toast.text }}</span>
    </div>
</template>

<script>
export default {
  props: {
    toast: {
      type: Object,
      required: true
    }
  }
}
</script>