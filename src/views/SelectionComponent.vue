<template>
  <div>
    <div>
      <b>Saved selection:</b>{{ savedItemName }}

      <!-- Show the saved item name here!-->
    </div>
    <ul>
      <li @click="selectItem(item)" :class="changeClass(item)" v-for="item in items">{{ item.name }}</li>
      <!-- Loop over the items and create <li> elements that shows the names of the items!-->
      <!-- On any item click, should set currentItemId to that item's id !-->
    </ul>
    <button @click="onSaveClick">
      Save
    </button>
  </div>
</template>

<script>

export default {
  name: 'SelectionComponent',
  props: {
    items: {
      type: Array,
      required: true,
    },
    selectedItemId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    currentItemId: null,
    savedItemName:null

  }),
  computed: {
    savedItemName(){
      for(let i=0;this.items.length>i;i++){
        if(this.items[i].id == this.selectedItemId){
          return this.items[i].name;
        }
      }
    }

  },
  methods: {
    onSaveClick() {
      console.log(this.currentItemId);
      this.$emit("update-item",this.currentItemId);
      // emit an `update-item` event with the saved item id
    },
    selectItem(item){
      this.currentItemId=item.id;
    },
    changeClass(item){
      if(item.id==this.currentItemId){
        return "bold"
      }
    }
   
  },
  
};
</script>

<style>
.bold{
  font-weight: bold;
}

</style>
