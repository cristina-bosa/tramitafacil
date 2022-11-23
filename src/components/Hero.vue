<template>
  <section class="hero">
    <section class="hero-img">
      <slot name="hero-img"></slot>
    </section>
    <section class="hero-container">
      <section class="hero-header">
        <h1>
          <slot name="hero-title"> </slot>
        </h1>
      </section>
      <section class="hero-content">
        <slot name="hero-content"> </slot>
      </section>
    </section>
  </section>
</template>
<style>
  .hero{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    gap: 2rem;
  }

</style>