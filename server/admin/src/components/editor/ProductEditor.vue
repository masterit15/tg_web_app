<template>
  <div class="editor_product" :class="editorProductShow ? 'active' : ''">
    <span class="btn_close" @click="close"><i class="fa fa-times"></i></span>
    <div class="editor_product_wrap csll">
      <pre>{{ product }}</pre>
      <fieldset class="field_group">
        <legend class="field_group_legend" >Фото</legend>
        <div class="field_group_file" @click="addPhoto()">
          <div class="field_group_file_img_wrap">
            <i class="fa fa-image" v-if="product.img.length == 0"></i>
          </div>
        </div>
        <input
          title="Фото блюда"
          type="file"
          class="field_group_input_file"
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
          @focus="$refs.ddcat.classList.add('active')"
        />
        <ul class="field_group_dropdown" ref="ddcat" >
          <li
            data-id=""
            @click="
              (product.cat = item.title), $refs.ddcat.classList.remove('active')
            "
            v-for="item in cat"
            :key="item.id"
          >
            {{ item.title }}
          </li>
        </ul>
      </fieldset>
      <fieldset class="field_group">
        <legend class="field_group_legend">Ингредиенты</legend>
        <input
          title="ингредиенты"
          type="text"
          v-model="product.ingredient"
          class="field_group_input"
          :disabled="isEdit"
          @focus="$refs.dding.classList.add('active')"
        />
        <ul class="field_group_multiselect">
          <li v-for="(item, index) in ing" :key="index"></li>
        </ul>
        <ul class="field_group_dropdown" ref="dding" >
          <li
            data-id=""
            @click="
            (addIngredient({...item})), $refs.dding.classList.remove('active')
            "
            v-for="item in ing"
            :key="item.id"
          >
            {{ item.title }}
          </li>
        </ul>
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
        <legend class="field_group_legend">Цена</legend>
        <input
          title="Цена"
          type="number"
          v-model="product.price"
          class="field_group_input"
          :disabled="isEdit"
        />
      </fieldset>

    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
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
      // ing: [],
      product: {
        name: "",
        cat: "",
        title: "",
        img: [],
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
    ...mapGetters(["editorProductShow", "category", "ingredient"]),
    cat() {
      return [...this.category].filter((c) =>
        this.product.cat
          .toLowerCase()
          .split(" ")
          .every((v) => c.title.toLowerCase().includes(v))
      );
    },
    ing() {
      return [...this.ingredient]
      // .filter((c) =>{console.log(this.product.ingredient.title);}
      //   // this.product.ingredient.title
      //   //   .toLowerCase()
      //   //   .split(" ")
      //   //   .every((v) => c.title.toLowerCase().includes(v))
      // );
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
        this.product.img = e.target.files[0]
        inputFileParent.innerHTML = ''
        inputFileParent.innerHTML = `<img class="field_group_file_img" src="${files}" title="${e.target.files[0].name}"/>`
      })
      
    },
    addIngredient(item){
      if(![...this.product.ingredient].find(i=>i.title == item.title)){
        this.product.ingredient.push(item)
      }
    },
    close() {
      this.productEditorClose(false);
    },
  },
};
</script>