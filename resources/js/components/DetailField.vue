<template>
  <PanelItem :index="index" :field="field">
    <template #value>
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
  </PanelItem>
</template>

<script>
import map from 'lodash/map'
import take from "lodash/take";

export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

  data: () => ({ theData: [] }),

  computed: {
    mappedData() {
      return map(this.field.value, (data, index) => {
        return {
          display: data
        }
      });
    },
  },


  created() {
    this.theData = map(
        Object.entries(this.field.value || {}),
        ([key, value]) => ({
          key: `${key}`,
          value,
        })
    )
  },
}
</script>
