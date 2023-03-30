<template>
  <div class="procedure-list mt-2">
    <p class="text-bold">
      <slot name="title"></slot>
    </p>
    <p>
      <slot name="description"></slot>
    </p>
    <i class="icon-center">
      <slot></slot>
    </i>
    <slot name="button"></slot>
  </div>
</template>
<script>

export default {
    name: 'ProcedureDetails'
}
</script>
<style>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: red;
}
</style>
