<script setup>
import CardMobil from '@/Components/home/CardMobil.vue'
import CarouselVue from '@/Components/home/Carousel.vue';

//
var scrol = window.scrollY;
const ActiveNav = "fixed z-10 bg-default-dark  w-[80%] h-20 top-10 text-white rounded-b-md transition-all";
const NonActiveNav = "fixed z-10 bg-default-dark  w-[80%] h-20 top-0 text-white rounded-b-md transition-all";
let NavbarClass = ActiveNav;
function NavbarScroll() {

    if (scrol > 0 || document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {

        NavbarClass = NonActiveNav;
    } else {
        NavbarClass = ActiveNav;
    }
    document.getElementById('Navbar').setAttribute('class', NavbarClass)

    return NavbarClass;
}
window.onscroll = function () { NavbarScroll() };

</script>

<template>

    <!-- component -->
    <div
        class="h-screen relative flex flex-col box-border bg-gradient-to-t from-yellow-500 to-yellow-200 overflow-hidden">
        <div class="absolute w-96 h-96 top-40" style="background-image: url('img/car-side.png')"></div>
        <div class="w-full h-max flex justify-center ">
            <div id="Navbar" v-bind:class="NavbarClass">
                <div class="md:hidden py-4 px-8 flex justify-between">
                    <div class="text-xl">Logo</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>

                <div
                    class="hidden md:flex flex-row gap-10 pl-10 place-items-center h-full shadow-md relative box-border ">
                    <div class="relative">
                        <svg class="w-full h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                    <div class="max-w-md">
                        <!--Search form-->
                        <form class="w-full">
                            <div class="relative">
                                <!--Search icon-->
                                <span class="absolute p-2 insert-y-0">
                                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </span>
                                <input type="search"
                                    class="w-full pl-9 py-1 text-gray-700 border border-gray-300 focus:outline-none rounded-md"
                                    placeholder="Cari Jenis Mobil">
                            </div>
                        </form>
                    </div>
                   <div class="w-full flex justify-between items-center">
                    
                    <ul class="flex flex-row gap-10">
                        <li>Home</li>
                        <li>About</li>
                        <li>Mobil</li>
                    </ul>
                    <div>
                       <router-link :to="{name: 'login'}"  class="focus:outline-none bg-white hover:bg-white focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-white text-default-dark">Masuk</router-link>
                    </div>
                   </div>
                </div>
                
            </div>
        </div>

        <div class="relative w-full h-full flex flex-col justify-center items-center">
            <div class="carousel w-[26rem] max-w-2xl bg-default-dark px-3 py-5 rounded-md">
                <h3 class="text-red-500 shadow-inner text-5xl font-extrabold">CV. <span
                        class="font-bold text-white">Jasa</span><span class="text-red-500 font-bold">|</span><span
                        class="text-white font-bold text-4xl">Saudagar</span>
                </h3>

            </div>
            <div class=" max-w-xl text-justify font-semibold leading-6">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa dolorum fugiat obcaecati,
                    maiores cumque repellendus corporis alias maxime aliquid magnam soluta quod, cum dicta qui facere
                    earum voluptas molestias.</p>
            </div>
        </div>
    </div>
    <CardMobil></CardMobil>

    <div class="w-full flex flex-col">
        <div class="text-center"><span class="font-extrabold text-5xl text-gray-800">Jenis Mobil</span></div>
        <div class="container mx-auto py-2 md:py-7">
            <CarouselVue></CarouselVue>
        </div>
    </div>

    <footer class="p-4 bg-default-dark shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/"
                class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>

</template>
<script >
export default {
    name: 'WelcomeVue',
}
</script>
