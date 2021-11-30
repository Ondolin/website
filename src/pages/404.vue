<template>
  <Layout>

    <div class="w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col pointer-events-none" style="height: calc(100vh - 6.5rem);">
        <span class="text-3xl mx-auto mt-5 lg:mt-20">{{ $t("pageNotFound.title") }}</span>
        <span class="text-9xl mx-auto mt-12">404</span>
        <span class="text-xl mx-auto mt-3">Page not found</span>
        <span class="text-2xl mx-auto mt-20 text-center">{{ $t("pageNotFound.subtitle") }}</span>
        <hr class="mx-auto w-32 border-accent my-2 lg:float-right">
    </div>

  </Layout>
</template>