<template>
  <div class="home container-fluid bg-img">
    <div>
      <div class="row align-items-center bg-dark p-5">
        <div class="col-12">
          <h1 class="whiteText">KanBan</h1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bg-img {
  background-image: url("../assets/deskimg.jpg");
  background-size: auto;
  background-repeat: no-repeat;
}

.bg-dark {
  opacity: 0.4;
}
.whiteText {
  color: white;
  font-size: 80px;
}
</style>