<template>
  <div id="filter">
    <input
      type="text"
      v-model="params.name"
      name="name"
      id="filter_name"
      placeholder="По названию"
    />
    <input
      type="text"
      name="date"
      id="filter_date"
      placeholder="По дате (от - до)"
    />
    <div class="sort" id="filter_sort">
      <span class="sort_value" @click="isShow = !isShow">Сортировать по</span>
      <ul class="sort_list" v-show="isShow">
        <li class="sort_list_item" @click="sortBy($event, 'by_rating')">
          По рейтингу
        </li>
        <li class="sort_list_item" @click="sortBy($event, 'by_accounts')">
          По отзывам
        </li>
        <li class="sort_list_item" @click="sortBy($event, 'by_price_up')">
          По цене <i class="fa fa-angle-up"></i>
        </li>
        <li class="sort_list_item" @click="sortBy($event, 'by_price_down')">
          По цене <i class="fa fa-angle-down"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AirDatepicker from "air-datepicker";
export default {
  data() {
    return {
      isShow: false,
      params: {
        name: "",
        dateFrom: "",
        dateTo: "",
        sortBy: "",
      },
    };
  },
  watch: {
    params:{
      handler(val){
       this.$emit('BackParams', val)
     },
     deep: true
    }
  },
  mounted() {
    const that = this;
    new AirDatepicker("#filter_date", {
      inline: false,
      range: true,
      timepicker: true,
      multipleDatesSeparator: " - ",
      onSelect({ date, formattedDate }) {
        if (formattedDate.length > 1) {
          that.params.dateFrom = formattedDate[0];
          that.params.dateTo = formattedDate[1];
        } else {
          that.params.dateFrom = formattedDate[0];
        }
      },
    });
  },
  methods: {
    sortBy(event, value) {
      let parent = event.target.closest(".sort");
      let sortValue = parent.querySelector(".sort_value");
      let allItems = parent.querySelectorAll(".sort_list_item");
      allItems.forEach((item) => item.classList.remove("active"));
      event.target.classList.add("active");
      let thisValue = event.target.innerHTML;
      sortValue.innerHTML = thisValue;
      this.params.sortBy = value;
      this.isShow = false;
    },
  },
};
</script>