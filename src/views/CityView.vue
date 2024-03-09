<script setup>
import AsyncCityView from "@/components/AsyncCityView.vue";
import CityViewSkeleton from "@/components/CityViewSkeleton.vue";
</script>

<template>
  <div>
    <!-- Suspense is currently not supported in Vue 3's script setup syntax. -->
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <CityViewSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
