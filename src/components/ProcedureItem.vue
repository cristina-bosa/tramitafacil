<template>
  <div class="procedure-list mt-2">
    <p class="text-bold">
      <slot name="title"></slot>
    </p>
    <p>
      <slot name="description"></slot>
    </p>
    <p>
      <slot name="icon"></slot>
    </p>
    <slot name="button"></slot>
  </div>
</template>

<style scoped>
.procedure-list{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  height: 8vh;
  min-height: 8vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--white-soft);
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  gap: 1rem;
}

</style>
