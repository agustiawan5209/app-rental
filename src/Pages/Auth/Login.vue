
<template>
    <!-- component -->
    <!-- This is an example component -->
    <div class="flex flex-col h-screen bg-gradient-to-b from-default-yellow to-yellow-200">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg">
                <div class="text-center mb-4">
                    <h6 class="font-semibold text-[#063970] text-xl">Login</h6>
                    <h4 v-if="status">{{ErrorStatus}}</h4>
                </div>
                <form action="#" class="space-y-5" v-on:submit.prevent="Login" method="GET" id="FormLogin">
                    <div>
                        <input id="email" type="email" class="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                            placeholder="john@email.com" v-model="email" />
                    </div>

                    <div class="relative w-full">
                        <input :type="showPass ? 'text' : 'password'" id="password" class="block w-full py-3 px-3 mt-2 mb-4
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                            placeholder="password" v-model="pass" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <p class="font-semibold cursor-pointer" @click="showPass = !showPass" x-text="showPass ? 'Show' : 'Hide'">
                                <svg v-if="showPass == true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                  </svg>
                                                                        
                            </p>
                        </div>
                    </div>

                    <button type="submit"  class="w-full py-3 mt-10 bg-default-yellow rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginVue',
    data(){
        return{
            showPass: false,
            email: '',
            pass: '',
            // btn: document.getElementById('Btn'),
            // formLogin: document.getElementById('FormLogin'),
            status: false,
            ErrorStatus: null,
        }
    },
    methods:{
        Login: function(){
            if(this.email == '' || this.pass == ''){
                this.status = true;
                this.ErrorStatus = "Maaf Password Salah!!"
            }else{
                if(this.pass > 8){
                    this.ErrorStatus = "Password Lemah!!"
                }else{
                    window.location.href = '/dashboard'
                }
            }
        }
    }

}
</script>
