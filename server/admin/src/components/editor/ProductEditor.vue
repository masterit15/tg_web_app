<template>
  <div class="editor_product" :class="editorProductShow ? 'active' : ''">
    <span class="btn_close" @click="close"><i class="fa fa-times"></i></span>
    <div class="editor_product_wrap">
      <pre>{{ product }}</pre>
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
          @blur="$refs.dd.classList.remove('active')"
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
    close() {
      this.productEditorClose(false);
    },
  },
};
</script>