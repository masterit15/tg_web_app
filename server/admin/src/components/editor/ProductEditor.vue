<template>
  <div class="editor_product" :class="editorProductShow ? 'active' : ''">
    <span class="btn_close" @click="close"><i class="fa fa-times"></i></span>
    <div class="editor_product_wrap">
      <!-- <pre>{{ product }}</pre> -->
      <fieldset class="field_group">
        <legend class="field_group_legend" >Фото</legend>
        <div class="field_group_file" @click="addPhoto()">
          <div class="field_group_file_img_wrap"></div>
        </div>
        <input
          title="Фото блюда"
          type="file"
          class="field_group_input_file"
          :disabled="isEdit"
        />
      </fieldset>
      <fieldset class="field_group">
        <legend class="field_group_legend">Название</legend>
        <input
          title="Название"
          type="text"
          v-model="product.title"
          class="field_group_input"
          :disabled="isEdit"
        />
      </fieldset>
      <fieldset class="field_group">
        <legend class="field_group_legend">Категория</legend>
        <input
          title="категория"
          type="text"
          v-model="product.cat"
          class="field_group_input"
          :disabled="isEdit"
          @focus="$refs.dd.classList.add('active')"
        />
        <ul class="field_group_dropdown" ref="dd" >
          <li
            data-id=""
            @click="
              (product.cat = item.title), $refs.dd.classList.remove('active')
            "
            v-for="item in cat"
            :key="item.id"
          >
            {{ item.title }}
          </li>
        </ul>
      </fieldset>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
const defaultProductObject = {
  name: "",
  cat: "",
  title: "",
  img: "",
  price: 0,
  ingredient: [],
  description: "",
  weight: 0,
};
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
export default {
  props: {
    productObj: Object,
  },
  data() {
    return {
      isEdit: false,
      product: {
        name: "",
        cat: "",
        title: "",
        img: "",
        price: 0,
        ingredient: [],
        description: "",
        weight: 0,
      },
    };
  },
  watch: {
    editorProductShow() {
      // console.log("this.editorProductShow", this.editorProductShow);
    },
  },
  computed: {
    ...mapGetters(["editorProductShow", "category"]),
    cat() {
      return [...this.category].filter((c) =>
        this.product.cat
          .toLowerCase()
          .split(" ")
          .every((v) => c.title.toLowerCase().includes(v))
      );
    },
  },
  methods: {
    ...mapActions(["productEditorClose"]),
    addPhoto(){
      let inputFile = document.querySelector('.field_group_input_file')
      const inputFileParent = document.querySelector('.field_group_file_img_wrap')
      inputFile.click()
      inputFile.addEventListener('change', async(e)=>{
        const files = await toBase64(e.target.files[0])
        // console.log(e.target.files[0].name);
        this.product.img = files
        inputFileParent.innerHTML = ''
        inputFileParent.innerHTML = `<img class="field_group_file_img" src="${files}" title="${e.target.files[0].name}"/>`
      })
      
    },
    close() {
      this.productEditorClose(false);
    },
  },
};
</script>