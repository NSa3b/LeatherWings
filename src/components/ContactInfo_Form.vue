<script>
export default {
    name: "ContactInfoForm",
    data() {
        return {
            form: {
                email: '',
                phone: '',
                firstName: '',
                lastName: '',
                country: 'Egypt',
                governorate: null,
                address: '',
                apartment: ''

            },
            allGovernorates: [],
            show: true
        }
    },
    methods: {
        onSubmit(event) {


        },
        async getGov() {
            const response = await fetch('http://localhost:3000/governates');
            const data = await response.json();
            this.allGovernorates = data;
        }
    },
    created() {
        this.getGov();
    }
}

</script>

<template>

    <h5>BILLING & SHIPPING</h5>
    <hr>
    <form>
        <label for="email"></label>
        <input id="email" placeholder="Email" type="email" v-model="form.email" required>

        <label for="fName"></label>
        <input id="fName" placeholder="First Name" type="text" v-model="form.firstName" required>

        <label for="lName"></label>
        <input id="lName" placeholder="Last Name" type="text" v-model="form.lastName" required>

        <label for="phone"></label>
        <input id="phone" placeholder="Phone" type="tel" v-model="form.phone" required>

        <label for="country"></label>
        <input id="country" placeholder="Egypt" type="text" disabled>

        <label for="gov"></label>
        <select id="gov" v-model="form.governorate">
            <option disabled value="">Please select the city</option>
            <option v-for="gov in allGovernorates">{{ gov.governorate_name_en }}</option>
        </select>

        <label for="address"></label>
        <input id="address" placeholder="Address" type="text" >

        <label for="apartment"></label>
        <input id="apapartmentt" placeholder="apartment,suite,etc (optional)" type="text">
    </form>

</template>