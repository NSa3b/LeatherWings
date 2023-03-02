<script>
export default{
    name:"footer",
    data(){
        return{

        }
    }
}
</script>

<template>
    <footer>
        <div class="mycontainer">
        <div>
            <div class="logo">
                <img src="../assets/pics/LOGO LEATHER WINGS white.png">
            </div>
            <div class="footeritem">
                <font-awesome-icon class="icon" icon="fa-solid fa-house" />
                <p>Proudly based in Egypt</p>
            </div>
            <div class="footeritem">
                <font-awesome-icon class="icon" icon="fa-regular fa-envelope" />
                <p>leatherWingsCo.gmail.com</p>
            </div>
        </div>
        <div class="footer">
            <h6>Shop</h6>
            <RouterLink to="/aboutus">About us</RouterLink>
            <RouterLink to="/shop">Duffle bags</RouterLink>
            <RouterLink to="/shop">Messenger bags</RouterLink>
            <RouterLink to="/shop">Tote bags</RouterLink>
            <RouterLink to="/shop">Leather Travel bags</RouterLink>
        </div>
        <div class="footer">
            <h6>Social media</h6>
            <a class="social" href="https://www.facebook.com/profile.php?id=100064044306845&mibextid=LQQJ4d"><font-awesome-icon class="icon" icon="fa-brands fa-square-facebook" />Facebook</a>
            <a  class="social" href="https://instagram.com/leatherwings65?igshid=YmMyMTA2M2Y="><font-awesome-icon class="icon" icon="fa-brands fa-square-instagram" />Instagram</a>
        </div>

    </div>
    </footer>
    
</template>

<style scoped>
.mycontainer{

    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    background-color:#282828 ;
    padding: 2rem;
    margin-top: 2rem;
   
}
.footeritem{
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 1rem 0;
}
.footer{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 1rem ;
}
.logo{
    width:150px
}
img{
    object-fit: contain;
    width: 100%;
    height: auto;
}
.icon{
    color: #8a8f6a;
    margin: 0.1rem 0.5rem;
    
}
.social,
a,
p{
    margin: 0.1rem;
    color: rgb(150, 150, 150);
}
h6{
    color: rgb(255, 255, 255);
    font-weight: bold;
}
</style>