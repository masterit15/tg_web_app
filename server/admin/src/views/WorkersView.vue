<template>
  <div class="page about">
    <h1>WorkersView.vue</h1>
    <button class="user_add">Добавить</button>
    <!-- <UserEditor :workerProp="workers[0]"/> -->
    
    <ul class="user_list">
      <li class="user_list_item" v-for="item in workers" :key="item.id">
        <h4>{{ item.name }}</h4>
        <div class="user_list_item_actions">
          <div class="user_list_item_actions_btn" @click="()=>{refs.userItemCtx.target.classList.toggle('active')}"><i class="fas fa-ellipsis-v"></i></div>
          <ul class="user_list_item_actions_context" ref="userItemCtx">
            <li><span class="user_list_item_actions_item edit"> <i class="fas fa-user-edit"></i></span></li>
            <li><span class="user_list_item_actions_item delete"><i class="fas fa-user-times"></i></span></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import UserEditor from '../components/editor/UserEditor.vue'
export default {
  created() {
    this.getWorkers();
  },
  computed: {
    ...mapGetters(["workers"]),
  },
  methods: {
    ...mapActions(["getWorkers"]),
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
  components:{
    UserEditor
  }
};
</script>