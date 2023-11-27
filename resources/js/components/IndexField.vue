<template>
  <div :class="`text-${field.textAlign}`">

    <TagGroup
        v-if="mappedData.length"
        :tags="mappedData"
        :resource-name="field.resourceName"
        :editable="false"
        :with-preview="field.withPreview"
    />
    <p v-else>&mdash;</p>
  </div>
</template>

<script>
import {Button} from 'laravel-nova-ui'
import map from 'lodash/map'
import take from 'lodash/take'

export default {
  components: {
    Button,
  },

  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

  computed: {
    mappedData() {
      let data = map(this.field.value, (data, index) => {
        return {
          display: data
        }
      })

      data = this.addShowMoreItem(
          take(data, this.field.tagLimit)
      );

      return data;
    },
  },
  methods: {
    addShowMoreItem(itemList) {
      if (this.field.value.length > this.field.tagLimit) {
        itemList.push({
          display: '...'
        })
      }

      return itemList;
    }
  }
}
</script>
