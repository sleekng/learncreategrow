// resources/js/Pages/SkillForm.vue

<template>
    <form @submit.prevent="submitForm">
        <div v-if=" $page.props.flash.message" class="alert alert-success">{{$page.props.flash.message}}</div>
        <input type="text" v-model="form.name" placeholder="Skill Name">
        <button type="submit">Submit</button>
    </form>

   <div class="mt-10">
    <h1 class=" font-bold">All skills</h1>
    <div v-for="skill in skills" :key="skill.id" class="mt-4">
        <p>{{ skill.name }}</p>
        <span class=" cursor-pointer text-red-700" @click="deleteSkill(skill)">Delete</span>
    </div>


   </div>
</template>

<script>
export default {
    props:{
        skills:{
            type: Array,
            required: true
        }
    },
    data() {
        return {
            form: {
                name: '',
            },
        };
    },
    methods: {
        async submitForm() {
            await this.$inertia.post(route('skills.store'), this.form);
        },

        async deleteSkill(skill) {
            if (confirm('Are you sure you want to delete this skill?')) {
                await this.$inertia.delete(route('skills.destroy', skill.id));
          
            }
        }
    },
};
</script>
