<template>
 <main class="relative flex  flex-col lg:flex-row w-full min-h-screen ">
  <SharedAppSidebar />
    <section
      class="relative min-h-screen flex-1 lg:rounded-4xl lg:m-2 lg:ml-0 order-1 lg:order-2 bg-[#fbfbfb] lg:border border-[#EBEBEB] lg:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-1px_20px_0px_#F2F4F5,0_0_0_20px_#FCFCFC]"
    >
     <slot />
      <SharedAppFooter />
    </section>
  </main>
  
</template>
<script setup lang="ts">

</script>