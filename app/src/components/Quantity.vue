<template>
  <div>
    <pre>Quantité:  {{ quantity }}</pre>
    <input type="range" v-model="quantity" min="0" max="100" step="1" />
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  data() {
    return { quantity: 0 };
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
div > pre {
  flex: 100%;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #329932;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 15px;
  width: 25px;
  border-radius: 16px;
  background: #000000;
  cursor: pointer;
}
</style>