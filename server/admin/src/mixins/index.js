import {mapActions} from 'vuex'
const mixins = {
  computed: {
    pageNow() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(['addCartProduct', 'deleteCartProduct']),
    numberFormate(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    addToCart(count ,product){
      const prd = {...product}
      prd.count = count
      this.addCartProduct(prd)
    },
    bayCount(event, param, product){
      let parent = event.target.closest('.catalog_list_item_action')
      let minus = parent.querySelector('.minus')
      let input = parent.querySelector('.catalog_list_item_action_bay_count')
      let value = Number(input.value) //== 0 ? 1 : Number(input.value)
      const prd = {...product}
      if(param == 'plus'){
        input.value = Number(value + 1)
      }else{
        input.value = Number(value - 1)
      }
      if(input.value > 0){
        input.classList.add('active')
        minus.classList.add('active')
        prd.count = input.value
        this.addCartProduct(prd)
      }else{
        input.classList.remove('active')
        minus.classList.remove('active')
        this.deleteCartProduct(product.id)
      }

    },
  },
}
export default mixins