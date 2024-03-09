<script setup>
import AsyncCityView from "@/components/AsyncCityView.vue";
</script>

<template>
  <div>
    <!-- Suspense is currently not supported in Vue 3's script setup syntax. -->
    <Suspense>
      <template #default>
        <AsyncCityView />
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
