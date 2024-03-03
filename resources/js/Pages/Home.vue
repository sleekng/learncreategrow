<template>
<div v-if="$page.props.flash.message" class=" fixed flex justify-center items-center top-0 left-0 w-screen z-40 bg-black/90 h-screen blur-lg">

</div>
<div v-if="$page.props.flash.message" class="animate-fade  animate-duration-[2000ms] animate-ease-linear fixed flex  px-4 justify-center items-center top-0 left-0 w-screen h-screen z-50">
    <div class="md:mx-5 text-center max-w-xl p-10 border relative dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
        <i @click="closeModal" class="fa-sharp cursor-pointer fa-thin fa-xmark text-white absolute right-4 top-4"></i>
        <p class=" text-green-600 text-4xl font-bold animate-jump animate-infinite animate-duration-[2000ms] animate-ease-linear">Congratulations!</p>
        <div class=" text-white mt-4">
            We're excited to embark on this learning journey with you! Stay tuned for updates and personalized recommendations based on your survey responses
        </div>
    </div>
</div>
<!-- Navigation Bar -->
<nav>
    <Navbar @signin="openModal('login')" @register="openModal('register')" />
</nav>
<!-- End Navigation Bar -->

<div class="bg-black ralative z-30 text-white" style="
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('storage/img/bg-body.jpg'); 
background-repeat: no-repeat;
 background-size: cover;

">
    <div class=" container mx-auto px-4">

        <div class="grid md:grid-cols-12 gap-20 grid-cols-1 w-full">
            <div class=" relative w-full md:col-span-6 mt-40 md:mt-0 flex md:min-h-screen flex-col items-center  justify-center sm:pt-0 ">
                <div>
                    <h1 class=" font-bold text-4xl md:text-6xl text-[#038a2c] animate-fade animate-duration-[3000ms] ">Thank you for taking the time to participate in our <span class=" text-[#f7c11e]">survey!</span> </h1>
                    <p class="mt-4 animate-fade animate-duration-[3000ms] animate-delay-[400ms]">We would like to know your interests in various digital skills to better tailor our offerings.</p>
                </div>
            </div>
            <div class="relative w-full md:col-span-6 mb-10 md:mt-20 flex md:min-h-screen flex-col items-center  justify-center sm:pt-0 animate-shake animate-duration-[3000ms] ">

                <div class="md:mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                    <div class="relative  -mb-px h-px w-full bg-gradient-to-r from-transparent via-[#f7c11e] to-transparent" bis_skin_checked="1"></div>
                    <div class="flex flex-col p-6">
                        <h3 class="text-xl font-semibold leading-6 tracking-tighter">Invest in your future</h3>

                    </div>
                    <div class="p-6 pt-0 overflow-y-auto ">
                        <form @submit.prevent=" submitForm">

                            <div class="mt-4">
                                <div>
                                    <InputError class="my-2" :message="form.errors.name" />
                                    <div class="group relative rounded-lg border focus-within:border-black px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div class="flex justify-between">
                                            <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Name</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="text" name="Name" v-model="form.name" class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground">
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="mt-4">
                                <div>
                                    <InputError class="my-2" :message="form.errors.email" />
                                    <div class="group relative rounded-lg border focus-within:border-black px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div class="flex justify-between">
                                            <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="text" v-model="form.email" name="Email" class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div>
                                    <InputError class="my-2" :message="form.errors.phone_number" />
                                    <div class="group relative rounded-lg border focus-within:border-black px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div class="flex justify-between">
                                            <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Phone Number</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="text" v-model="form.phone_number" name="Phone Number" class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm font-medium mt-4 text-white/50">Please indicate your level of interest in each of the following skills
                            </p>

                            <InputError class="my-2" :message="form.errors.skills" />
                            <div v-for="(skill, index) in skills" :key="skill" :class=" index == 0 ? 'mt-2':'mt-6 '">
                                <div :class="'animate-duration-['+(1+index)+'000]'" class="animate-fade-left">

                                    <input type="checkbox" :id="'skill_' + index" v-model="form.skills" :value="skill.id" class="mr-2">
                                    <label :for="'skill_' + index">{{ skill.name }}</label>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center justify-end gap-x-2">
                                <button :disabled="isSubmitting" class="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring  bg-[#038a2c] hover:ring-[#038a2c] h-10 px-4 py-2 duration-200">
                                    <span v-if="isSubmitting" class="loader"></span>
                                    <span>Submit</span>
                                </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
        <div style=" display: flex; justify-content: center;">
            <p style="display: flex; margin: 20px 0;">
                <a style="display: flex; color: #038a2c;" href="https://api.whatsapp.com/send?phone=07030068148">

                    <img style="width: 30px; margin-right: 5px;" src="storage/img/whatsapp.png" alt="">
                    Send message on WhatsApp
                </a>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import Modal from "@/Components/Modal.vue";

import PrimaryButton from "@/Components/PrimaryButton.vue";
import Navbar from "@/Components/Navbar.vue";
import Footer from "@/Components/Footer.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from '@/Components/InputError.vue';
import {
    Link,
    useForm
} from "@inertiajs/vue3";
import SideBar from "@/Components/PrimarySidebar.vue";
export default {
    props: {
        skills: {
            type: Array,
            required: true
        }
    },

    components: {
        Navbar,
        ApplicationLogo,
        PrimaryButton,
        Footer,
        TextInput,
        Link,
        SideBar,
        useForm,
        InputError
    },

    data() {
        return {
            showSideBar: false,

            isSubmitting: false,
            form: useForm({
                name: null,
                email: null,
                phone_number: null,
                skills: [],
            }),

        }
    },

    methods: {

        async submitForm() {
            this.isSubmitting = true;
            await this.form.post(route('register'), {
                preserveScroll: true,

                onSuccess: () => {
                        // Code to execute on successful form submission
                        this.isSubmitting = false;
                        this.form.reset();
                    },
                onError: (errors) => {
                    this.isSubmitting = false;
                    // Code to handle form submission errors
                },
            });
        },
        
        closeModal() {
            this.$page.props.flash.message = null
            this.isSubmitting = false;
         
        },

    
    },
}
</script>

<style lang="scss" scoped>

</style>
