import {mapActions, mapGetters} from 'vuex'
const mixins = {
  data () {
    return {
      displayNumber:0,
      interval:false
    }
  },
  watch: {
    totalPrice () {
      clearInterval(this.interval);
      if(this.totalPrice == this.displayNumber) {
        return;
      }
      this.interval = window.setInterval(() => {
        if(this.displayNumber != this.totalPrice) {
          var change = (this.totalPrice - this.displayNumber) / 10;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.displayNumber = this.displayNumber + change;
        }
      }, 20);
    }
  },
  computed: {
    ...mapGetters(['cart']),
    pageNow() {
      return this.$route.name;
    },
    totalPrice(){
      let total = 0
      this.cart.forEach(ce => {
        total += ce.price * ce.count
      });
      return total
    }
  },
  methods: {
    ...mapActions(['addCartProduct', 'deleteCartProduct']),
    numberFormate(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    calcWeight(weight){
      if(weight > 0 && weight < 1000){
        return `${weight} г`
      }else{
        return `${weight/1000} кг`
      }
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