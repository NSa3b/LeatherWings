<script>
export default {
    name: "ContactInfoForm",
    data() {
        return {
            form: {
                email: "",
                phone: "",
                firstName: "",
                lastName: "",
                country: "Egypt",
                governorate: "",
                address: "",
                apartment: null,
                postalCode: ""

            },
            errors: {
            },
            allGovernorates: [],
            show: "true",
            titleshow: []
        }
    },
    propps:{
    },
    methods: {
        onSubmit() {
            this.errors = [];
            const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]*$/;
            for (const info in this.form) {
                if (this.form[info] == "") {
                    if (info == "email" || info == "address") {
                        this.errors[info] = `Enter an ${info}`;
                    }
                    else if (info == "governorate") {
                        this.errors[info] = `Select a state / province`;
                    }
                    else {
                        this.errors[info] = `Enter a ${info}`;
                    }
                }
            }
            if (this.form.email.length > 0 && !emailRegExp.test(this.form.email)) {
                this.errors.email = `This is not a valid email`;
            }
            if (this.form.phone.length > 0 && this.form.phone.length < 11) {
                this.errors.phone = `This is not a valid mobile number`;
            }
            if (this.form.postalCode.length > 0 && this.form.postalCode.length < 5) {
                this.errors.postalCode = `This is not a valid postal code`;
            }
            if (Object.keys(this.errors).length == 0) {
                console.log("Sounds Greate!");
                localStorage.ContactInfo=JSON.stringify(this.form);
                this.$router.replace({path:"/shipping"})

            }
            else {
                console.log(this.errors);
            }

        },
        inputChange(input) {
            this.errors[input] = "";
        },
        async getGov() {
            const response = await fetch('http://localhost:3000/governates');
            const data = await response.json();
            this.allGovernorates = data;
        }

    },
    created() {
        this.getGov();
        if(localStorage.ContactInfo){
            this.form =JSON.parse(localStorage.ContactInfo);
        }
    }
}

</script>

<template>
    <h5>BILLING & SHIPPING</h5>
    <hr>
    <form>
        <div class="column email">
            <label for="email"></label>
            
            <input class="input" id="email" placeholder="Email" type="email" v-model="form.email"
                @input="inputChange('email')"><p v-show="form.email" class="title">Email</p>  
            <p class="errormsg">{{ errors.email }}</p>
        </div>

        <div class=" column name">
            <div class="Fname">
                <label for="fName"></label>
                <input class="input" id="fName" placeholder="First Name" type="text" v-model="form.firstName"
                    @input="inputChange('firstName')">
                <p v-show="form.firstName" class="title">First Name</p>
                <p class="errormsg">{{ errors.firstName }}</p>
            </div>

            <div class="Lname">
                <label for="lName"></label>
                <input class="input" id="lName" placeholder="Last Name" type="text" v-model="form.lastName"
                    @input="inputChange('lastName')">
                <p v-show="form.lastName" class="title">Last Name</p>
                <p class="errormsg">{{ errors.lastName }}</p>
            </div>
        </div>

        <div class=" column address">
            <label for="address"></label>
            <input class="input" id="address" placeholder="Address" type="text" v-model="form.address"
                @input="inputChange('address')">
            <p v-show="form.address" class="title">Address</p>
            <p class="errormsg">{{ errors.address }}</p>
            
        </div>

        <div class=" column apt">
            <label for="apartment"></label>
            <input class="input" id="apartment" placeholder="Apartment,suite,etc (optional)" type="text"
                v-model="form.apartment">
            <p v-show="form.apartment" class="title">Apartment,suite,etc</p>
            <p class="errormsg">{{ errors.eg }}</p>
        </div>


        <div class=" column region">

            <div class="country">
                <label for="country"></label>
                <input class="input" id="country" placeholder="Egypt" type="text" disabled>
                <p class="errormsg">{{ errors.eg }}</p>
            </div>

            <div class="gov">
                <label for="gov"></label>
                <select id="gov" class="input" v-model="form.governorate" @change="inputChange('governorate')">
                    <option disabled value="">Select the city</option>
                    <option v-for="gov in allGovernorates" :value=gov.governorate_name_en>{{ gov.governorate_name_en }}</option>
                </select>
                <p v-show="form.governorate" class="title">Select the city</p>
                <p class="errormsg">{{ errors.governorate }}</p>
            </div>

            <div class="postalcode">
                <label for="postalcode"></label>
                <input class="input" id="postalcode" placeholder="Postal code" type="text" v-model="form.postalCode"
                    @input="inputChange('postalCode')">
                <p v-show="form.postalCode" class="title">Postal code</p>
                <p class="errormsg">{{ errors.postalCode }}</p>
            </div>

        </div>

        <div class="column phone">
            <label for="phone"></label>
            <input class="input" id="phone" placeholder="Mobile number" type="tel" v-model="form.phone"
                @input="inputChange('phone')">
            <p v-show="form.phone" class="title">Mobile number</p>
            <p class="errormsg">{{ errors.phone }}</p>
        </div>

        <div class="navigation">
            <router-link to="/cart"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Return to cart</router-link>
            <button @click.prevent="onSubmit()" class="checkout-btn" type="submit">Proceed to Checkout</button>
        </div>

    </form>
</template>

<style scoped>
.checkout-btn {
    font-weight: 600;
    border: none;
    background-color: #8a8f6a;

    color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    transition: background-color 0.4s ease-in-out, transform 1.5s ease-in-out;
}

.checkout-btn:hover {
    background-color: #414141;
}

.checkout-btn:active {
    transform: scale(0.1)
}

.errormsg {
    font-size: small;
    color: red;
    margin: 0;
}

.input {
    width: 100%;
    height: 3rem;
    font-size: small;
    padding: 0.5rem;
    padding-top: 1rem;
    border: 0.05rem rgba(128, 128, 128, 0.808) solid;
    border-radius: 0.3rem;
}

.Fname,
.Lname {
    width: 48.5%;
    position: relative;
}

.country,
.gov,
.postalcode {
    width: 31.5%;
    position: relative;
}

.email,
.address,
.apt,
.phone{
    position: relative;
}

.name,
.region {
    display: flex;
    align-items: start;
    justify-content: space-between;
}

.navigation {
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 3rem 0rem;
}

.column {
    margin: 1rem 0rem;
} 
.title{
    font-size: x-small;
    position: absolute; 
    top: 12%;
    left: 1.5%;
}


</style>