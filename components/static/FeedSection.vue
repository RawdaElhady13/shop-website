<template>
<div class="feed-section-container relative w-full h-32 overflow-hidden">

<div class="feed-section-cards w-full overflow-x-scroll flex flex-row align-center justify-center gap-3 px-8 py-4">


<div v-for="index in 5"  class="item-card rounded-full border shrink-0 grow-0 border-[#e6e9ed] shadow-sm bg-white py-1.5 pl-1.5 pr-4 h-11 flex flex-row align-center justify-center gap-2">
    <img :src="heros.hero_1" alt="hero" class="w-7.5 h-7.5 rounded-full "/>
    <span>women</span>
</div>
    



</div>

</div>





</template>

<script setup lang="ts">
import {heros}from "@/core/manger/AssetsManager"

</script>