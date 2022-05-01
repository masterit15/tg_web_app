<template>
  <div class="user_editor">
    <pre>{{worker}}</pre>
    <!-- <form class="user_editor_form" @submit.prevent="addWorker()" action="" method="post">
      <div v-if="avatar_preview.length == 0" @click="avatarPreview()" class="user_editor_avatar_preview_default">
        <img :src="avatar_preview_default">
      </div>
      <div v-else @click="avatarPreview()" :style="{backgroundImage: `url(${avatar_preview})`}" class="user_editor_avatar_preview" ></div>
      <input
        type="file"
        name="avatar"
        ref="avatar"
      />
      <input type="text" name="name" v-model="name" />
      <input type="text" name="login" v-model="login" />
      <input type="password" name="password" v-model="password" />
      <input type="text" name="permission" v-model="permission" />
    </form> -->
  </div>
</template>
<script>
export default {
  props: {
    workerProp: Object
  },
  data() {
    return {
      avatar_preview_default: require('../../assets/user.png')
    };
  },
  computed: {
    worker(){
      if(!workerProp){
        return {
          name: "",
          login: "",
          avatar: "",
          password: "",
          permission: "Сотрудник",
          avatar_preview: '',
        }
      }
    }
  },
  methods: {
    addWorker() {},
    async avatarPreview() {
      this.$refs.avatar.click()
      this.$refs.avatar.addEventListener('change', async(e)=>{
        this.avatar_preview = await this.getBase64(e.target.files[0]);
        this.avatar = e.target.files
      })
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
      });
    },
  },
};
</script>
<style lang="sass">
.user
  &_editor
    &_form
      display: flex
      justify-content: flex-start
      flex-direction: column
      width: 450px
      height: 500px
      gap: 30px
    &_avatar
      &_preview
        width: 80px
        height: 80px
        display: block
        border-radius: 100%
        background-position: 50% 50%
        background-size: cover
        &_default
          width: 80px
          height: 80px
          border: 2px dashed #ddd
          padding: 10px
          border-radius: 100%
          img
            max-width: 100%
</style>