import {mapGetters, mapActions} from 'vuex'
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
    
    like(event,item){
      let parent = event.target.closest('.product_list_item_like')
      if(!parent.classList.contains('active')){
          parent.classList.add('active')
          event.target.classList.remove('fa-regular')
          event.target.classList.add('fa-solid')
        }else{
          parent.classList.remove('active')
          event.target.classList.remove('fa-solid')
          event.target.classList.add('fa-regular')
        }
    },
    
    bayCount(event, param, product){
      let parent = event.target.closest('.product_list_item_bay')
      let minus = parent.querySelector('.minus')
      let input = parent.querySelector('.product_list_item_bay_count')
      let value = Number(input.value) //== 0 ? 1 : Number(input.value)
      const prd = {...product}
      console.log({event, param, product});
      
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
  }
}
export default mixins