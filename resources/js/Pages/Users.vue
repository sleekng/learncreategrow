// resources/js/Pages/SkillForm.vue

<template>
   <div class="mt-10">
    <div v-if=" $page.props.flash.message" class="alert alert-success">{{$page.props.flash.message}}</div>
    <h1 class=" font-bold">All Users</h1>
<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">{{ usersCount }} Users</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Phone Number</th>
              <th scope="col" class="px-6 py-4">Email</th>
              <th scope="col" class="px-6 py-4">Skills</th>
              <th scope="col" class="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in users" :key="index"
              class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">

              <td class="whitespace-nowrap px-6 py-4">{{ index+1 }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ user.name }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ user.phone_number }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ user.email }}</td>
              <td class="whitespace-nowrap px-6 py-4">
                
                  <span v-for="skill in user.skills" :key="skill">
                    {{ skill.name }},&nbsp;
                </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4"><span class=" cursor-pointer text-red-700" @click="deleteSkill(user)">Delete</span></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

   </div>
</template>

<script>
export default {
    props:{
        users:{
            type: Array,
            required: true
        },
        usersCount:{
            type: String,
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

        async deleteSkill(user) {
            if (confirm('Are you sure you want to delete this User')) {
                await this.$inertia.delete(route('registered-users.destroy', user.id));
          
            }
        }
    },
};
</script>
