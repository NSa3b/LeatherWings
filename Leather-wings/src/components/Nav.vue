<script>
export default{
    name:'Nav',
    components:{

    },
    data(){
        return{

        }
    }
}
</script>

<template>

    <nav>
        <div class="navItem pages">
            <p><a>HOME</a></p>
            <p><a>SHOP</a></p>
            <p><a>ABOUT US</a></p>
        </div>
        <div class="navItem logo">
            <img src="../assets/pics/LOGO LEATHER WINGS.png">
        </div>
        <div class="navItem">
            <a><font-awesome-icon icon="fa-solid fa-user" size="lg" /></a>
            <a><font-awesome-icon icon="fa-solid fa-cart-plus" size="lg"/></a>
        </div>
    </nav>

</template>

<style scoped>
img{
    width: 8rem;
    height: auto;
}
.navItem{
    display: flex;
    justify-content: center;
    align-items: center;
}
nav{
    position: fixed;
    z-index: 10;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    background-color:#161a23cc;
    color: white;
}
a{
    margin: 0 1rem;
}
</style>