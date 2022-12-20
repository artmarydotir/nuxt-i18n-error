<template>
  <div>
    <h1>Test Page</h1>
    {{ $t("about") }}
  </div>
</template>
<script setup>
const { t } = useI18n();
console.log(t);
</script>
