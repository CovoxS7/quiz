<template>
  <div class="container-fluid" :class="containerClasses">
    <div class="row" :class="topRowClasses">
      <div :class="middleColumnClasses">
        <slot name="middleCol">
          <h1>Mittlere Spalte</h1>
        </slot>
      </div>
    </div>
    <div class="row" :class="bottumRowClasses">
      <div :class="leftColumnClasses">
        <slot name="leftCol">
          <h1>Linke Spalte</h1>
        </slot>
      </div>
      <div :class="rightColumnClasses">
        <slot name="rightCol">
          <h1>Rechte Spalte</h1>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTwoColumnsLayout",
  props: {
    containerClass: {
      type: String,
    },
    topRowClass: {
      type: String,
    },
    bottumRowClass: {
      type: String,
    },
    middleColumnClass: {
      type: String,
      default: "offset-1 col-10",
    },
    leftColumnClass: {
      type: String,
      default: "col-10 col-sm-5",
    },
    rightColumnClass: {
      type: String,
      default: "col-10 col-sm-5",
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
    middleColumnClasses() {
      return this.middleColumnClass;
    },
    leftColumnClasses() {
      return this.leftColumnClass;
    },
    rightColumnClasses() {
      return this.rightColumnClass;
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
