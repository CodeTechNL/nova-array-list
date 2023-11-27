import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/default_component/KeyValueField'
import KeyValueHeader from './components/default_component/KeyValueHeader';
import KeyValueTable from './components/default_component/KeyValueTable';
import KeyValueItem from './components/default_component/KeyValueItem.vue';

Nova.booting((app, store) => {
  app.component('key-value-header-array-list', KeyValueHeader)
  app.component('key-value-item-array-list', KeyValueItem)
  app.component('key-value-table-array-list', KeyValueTable)

  app.component('index-nova-array-list', IndexField)
  app.component('detail-nova-array-list', DetailField)
  app.component('form-nova-array-list', FormField)
})
