<template>
  <div>
    <p>Sélectionner votre photo</p>
    <input
      style="display: none"
      type="file"
      accept="image/*"
      @change="onFileSelected"
      ref="fileInput"
    />
    <button
      @click="
        $refs.fileInput.click();
        sendImage();
      "
    >
      Choisir une photo
    </button>
    <img v-if="fileContent" :src="fileContent" />
  </div>
</template>

<script>
export default {
  name: "AddImg",
  data() {
    return { selectedFile: null, fileContent: null };
  },
  methods: {
    onFileSelected(event) {
      const vm = this;
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
      // it's onload event and you forgot (parameters)
      reader.onload = function (e) {
        // the result image data
        vm.fileContent = e.target.result;
      };
      // you have to declare the file loading
      reader.readAsDataURL(this.selectedFile);
    },
    sendImage() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

div {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
div > p {
  flex: 100%;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
img {
  max-height: 40vh;
  display: block;
  object-fit: contain;
}
</style>