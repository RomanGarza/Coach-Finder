<template>
    <form>
        <div>
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" v-model.trim="firstName" />
        </div>
        <div>
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" v-model.trim="lastName" />
        </div>
        <div>
            <label for="Description">Description</label>
            <textarea id="Description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div>
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="rate" />
        </div>
        <div>
            <h3>Areas of Expertise</h3>
            <div>
                <input id="frontend" type="checkbox" v-model="areas" />
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input id="backend" type="checkbox" v-model="areas" />
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input id="career" type="checkbox" v-model="areas" />
                <label for="career">Career Development</label>
            </div>
        </div>
        <button>Register</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: []
        }
    }
}
</script>