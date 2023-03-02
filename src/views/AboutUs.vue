<script>
export default {
    name: "about",
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
        <div class="logocontainer">
            <img  src="../assets/pics/LOGO LEATHER WINGS.png">
        </div>
        <h2> ABOUT US</h2>
        <p class="p1">We, at Leather Wings, aim to provide our customers with durable leather bags which will be a reliable companion
            during their travels. People’s fascination with an appreciation for leather is as old as time itself. There’s a
            reason why leather appears to always be in fashion. Simply put, it’s because leather is long-lasting,
            comfortable and has a classy look that has withstood the test of time. A genuine handmade leather bag which has
            been put together with exquisite perfection should be the textbook example of what the phrase ‘subtle elegance’
            means. For us, the pursuit of timeless design in our leather bags is an effortless endeavor; when we make our
            vintage leather bags, we only use traditional methods but what gives our leather bags their authenticity is the
            touch of skillful mastery that comes from long years spent perfecting a craft. Graceful elegance is
            second-nature to our master artisans as they have dedicated their lives to their craft and are passionate about
            what they consider to be their ‘art’.
        </p>
        <p>
            We also believe our customers deserve to know the story of how the leather used in their bag came to be. One of
            our priorities was to ensure that our customers have the peace of mind that the products they would be spending
            their hard-earned money on are not of questionable origin. We have taken a holistic approach to mapping where
            our leather comes from and how it has been processed. We’ve thoroughly vetted many providers of raw leather in
            terms of their background, work philosophy, sourcing and tanning practices and even their stance on ethical
            conduct in general. We have taken the utmost care to procure genuine leather of the highest quality because we
            have an obsessive love for leather ourselves and our customers deserve nothing less than the best.
        </p>

        
        <div class="covercontainer">
            <img  src="https://cdn.shopify.com/s/files/1/0184/4605/7572/files/shutterstock_674634496_kopyasi.jpeg?v=1549028830">
        </div>

    </div>
</template>

<style scoped>
.mycontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logocontainer {
    width: 20%;
}
.covercontainer{
    height: 400px;
    width: 1040px;
    margin: 1rem;

}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
p{
    margin: 1.5rem 2rem;
    position: relative;
}
.p1::before{
    content: "";
    position:absolute;
    width: 0.3rem;
    height: 51.5rem;
    background-color: #8a8f6a ;
    top:0%;
    left: -2%;

}
h2{
    margin: 1.5rem 0;
    font-weight: bold;
}

</style>