<template>
  <div class="container-fluid" :class="containerClasses">
    <div class="row" :class="topRowClasses">
      <slot name="topRow">
        <h1>Obere Reihe</h1>
      </slot>
    </div>
    <div class="row" :class="bottumRowClasses">
      <slot name="bottumRow">
        <h1>Untere Reihe</h1>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTwoRowLayout",
  props: {
    containerClass: {
      type: String,
      default: "text-center bg-vue",
    },
    topRowClass: {
      type: String,
      default: "align-items-center justify-content-center",
    },
    bottumRowClass: {
      type: String,
      default: "align-items-center justify-content-center",
    },
    fullsize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    containerClasses() {
      return [this.containerClass, this.fullsize ? "vh-100" : ""];
    },
    topRowClasses() {
      return [this.topRowClass, this.fullsize ? "ht" : ""];
    },
    bottumRowClasses() {
      return [this.bottumRowClass, this.fullsize ? "hb" : ""];
    },
  },
};
</script>

<style scoped>
.ht {
  height: 35%;
}
.hb {
  height: 65%;
}

@media (max-width: 992px) {
  .ht {
    height: 30%;
  }
  .hb {
    height: 70%;
  }
}
</style>
