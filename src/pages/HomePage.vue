<template>
  <div class="container-sm vh-100 bg-vue">
    <div class="row h-100">
      <div class="offset-1 col-10">
        <div class="mt-5 text-center">
          <div class="display-5">Flugzeug</div>
          <hr />
          <div class="display-1">Quiz</div>
          <div class="mt-5">
            <img src="@/assets/p47thunderbolt.svg" alt="" class="img-fluid" />
          </div>
          <div class="mt-5">
            <span>Jetzt Namen eingeben und los gehts.</span>
          </div>

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped></style>
