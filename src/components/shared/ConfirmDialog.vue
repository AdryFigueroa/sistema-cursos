<template>
    <b-modal
      :value="show"
      @change="$emit('update:show', $event)"
      :title="title"
      @ok="$emit('confirm')"
    >
      <p>{{ message }}</p>
    </b-modal>
  </template>
  
  <script>
  export default {
    name: 'ConfirmDialog',
    props: {
      show: Boolean,
      title: String,
      message: String
    }
  }
  </script>