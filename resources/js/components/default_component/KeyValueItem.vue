<template>
  <div v-if="isNotObject" class="flex items-center key-value-item">
    <div
      class="flex flex-grow border-b border-gray-200 dark:border-gray-700 key-value-fields"
    >

      <div
        @click="handleValueFieldFocus"
        class="flex-grow border-l border-gray-200 dark:border-gray-700"
        :class="[
          !isEditable
            ? 'bg-gray-50 dark:bg-gray-700'
            : 'bg-white dark:bg-gray-900',
        ]"
      >
        <textarea
          rows="1"
          :dusk="`key-value-value-${index}`"
          v-model="item.value"
          @focus="handleValueFieldFocus"
          ref="valueField"
          type="text"
          class="font-mono text-xs block w-full px-3 py-3 dark:text-gray-400"
          :readonly="!isEditable"
          :tabindex="!isEditable ? -1 : 0"
          :class="{
            'bg-white dark:bg-gray-800 focus:outline-none': !isEditable,
            'hover:bg-20 focus:bg-white dark:bg-gray-900 dark:focus:bg-gray-900 focus:outline-none focus:ring focus:ring-inset':
              isEditable,
          }"
        />
      </div>
    </div>

    <div
      v-if="isEditable && canDeleteRow"
      class="flex justify-center h-11 w-11 absolute -right-[50px]"
    >
      <Button
        @click="$emit('remove-row', item.id)"
        :dusk="`remove-key-value-${index}`"
        variant="link"
        state="danger"
        type="button"
        tabindex="0"
        :title="__('Delete')"
        icon="minus-circle"
      />
    </div>
  </div>
</template>

<script>
import autosize from 'autosize'
import { Button } from 'laravel-nova-ui'

export default {
  components: {
    Button,
  },

  emits: ['remove-row'],

  props: {
    index: Number,
    item: Object,
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    readOnlyKeys: {
      type: Boolean,
      default: false,
    },
    canDeleteRow: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    autosize(this.$refs.valueField)
  },

  methods: {
    handleValueFieldFocus() {
      this.$refs.valueField.select()
    },
  },

  computed: {
    isNotObject() {
      return !(this.item.value instanceof Object)
    },
    isEditable() {
      return !this.readOnly && !this.disabled
    },
  },
}
</script>
