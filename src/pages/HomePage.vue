<template>
  <TheEmptyLayout
    :fullsize="true"
    :containerClass="'text-center bg-vue'"
    :topRowClass="'align-items-center offset-lg-1 col-lg-10'"
    :bottumRowClass="'align-items-center justify-content-center offset-lg-1 col-lg-10'"
    :middleColumnClass="'offset-1 col-10 offset-lg-4 col-lg-4'"
    :leftColumnClass="'col-10 col-lg-6'"
    :rightColumnClass="'col-10 col-lg-4'"
  >
    <template #middleCol>
      <div>
        <div class="display-5">Flugzeug</div>
        <hr />
        <div class="display-1">Quiz</div>
      </div>
    </template>
    <template #leftCol>
      <div>
        <img
          src="@/assets/p47thunderbolt.svg"
          alt="Flugzeug"
          class="img-fluid"
        />
      </div>
    </template>
    <template #rightCol>
      <div class="mb-5">
        <span>Jetzt Namen eingeben und los gehts.</span>
        <form class="mt-4">
          <input
            type="text"
            name="nickname"
            id="nickname"
            class="form-control text-center"
            placeholder="Nickname"
          />
          <div class="d-grid mt-2">
            <button class="btn bg-vue2">Start</button>
          </div>
        </form>
      </div>
    </template>
  </TheEmptyLayout>
</template>

<script>
import TheEmptyLayout from "@/layouts/TheEmptyLayout.vue";
export default {
  name: "HomePage",
  components: {
    TheEmptyLayout,
  },
};
</script>

<style scoped></style>
