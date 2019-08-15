<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import { getList,login } from "../api";
export default {
  name: "home",
  async created() {
    let data = await getList();
    console.log(data);
    console.log(waitlogin("lili","1234456")) 
  }
};
</script>
  