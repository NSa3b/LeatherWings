<script>
import productCard from '../components/Product_card.vue'

export default {
    name: "shop",
    data() {
        return {
            allItems: [],
            allCategories: [],
            categoryselected:0
        }
    },
    components: {
        productCard
    },
    methods: {
        async getAllitems() {
            const response = await fetch('http://localhost:3000/items');
            const data = await response.json();
            this.allItems = data;
            this.categoryselected=0;
        },
        async getCategories() {
            const response = await fetch('http://localhost:3000/category');
            const data = await response.json();
            this.allCategories = data;
        },
        async getItemsbyCategoryid(id) {
            const response = await fetch(`http://localhost:3000/items/?catId=${id}`);
            const data = await response.json();
            this.allItems = data;
            this.categoryselected=id;
        }

    },
    async created() {
        this.getAllitems();
        this.getCategories();
    }
}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
        <div class="category">
            <h4 class="cat-title">PRODUCT TYPE</h4>
            <ul>
                <li @click="getAllitems()">
                    <a :class="(this.categoryselected==0)?'green':''">ALL</a>
                    <hr />
                </li>
                <li v-for="cat in allCategories" @click="getItemsbyCategoryid(cat.id)">
                    <a :class="(cat.id==this.categoryselected)?'green':''">Leather {{ cat.title }}</a>
                    <hr />
                </li>
            </ul>
        </div>
        <div class="cards">
            <productCard :all-items="this.allItems"></productCard>
        </div>

    </div>
</template>

<style scoped>
.mycontainer {
    display: grid;
    grid-auto-rows: minmax(10rem, auto);
    grid-template-columns: 1fr 3fr;
    grid-gap: 2.5rem;
}
.mynav {
    grid-column: 1/6;
}
.category {
    grid-column: 1/2;
}
.cards {
    grid-column: 2/6;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
}
ul {
    font-style: italic;
    font-weight: 800;
    padding: 0;
    margin: 1.5rem 0;
    list-style-type: none;
}
.green{
    color:#8a8f6a;
}
</style>