<script setup>
import AsyncCityView from "@/components/AsyncCityView.vue";
</script>

<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
