

<script>
import SelectionComponent from './SelectionComponent.vue';

export default {
  name: 'Application',
  components: {
    SelectionComponent,
  },
  data: ()=>({
    items: [
      {
        id: 1,
        name: 'Olago Ko',
      },
      {
        id: 2,
        name: 'Kombo Max',
      },
      {
        id: 3,
        name: 'Mohesen',
      },
      {
        id: 4,
        name: 'Fofo',
      },
    ],
    selectItemId: 3,
  }),
  methods: {
    updateItem(itemId) {
      this.selectItemId = itemId;
    },
  },
};
</script>

<template>
  <div>
    <SelectionComponent
      :items="items"
      :selected-item-id="selectItemId"
      @update-item="updateItem"
    />
  </div>
</template>
