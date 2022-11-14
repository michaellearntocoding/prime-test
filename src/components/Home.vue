<script>
  import NavigationBar from './NavigationBar.vue'
  import Collection from './Collection.vue'
  import Promos from './Promos.vue'
  import Categories from './Categories.vue'
  import Shipping from './Shipping.vue'
  import Payment from './Payment.vue'
  import Cart from './Cart.vue'
  import News from './News.vue'
  import Success from './Success.vue'
  
  // import DetailProduk from './DetailProduk.vue'


  export default {
   components: {
      NavigationBar,
      Collection,
      Promos,
      Categories,
      Shipping,
      Payment,
      News,
      Shipping,
      Payment,
      Cart,
      Success,
      // DetailProduk
   },
  // state
  data() {
    return {
      show: false,
      showProduk: false,
      view: 0,
    }
  },
  // actions
  mounted: function(){
    let resp = this.$route.query['g-recaptcha-response']
    if (resp.length==0){
      alert("Invalid reCAPTCHA");
      this.$router.push({ name: 'Login' })
    }
},
  methods: {
    toggleShow() {
        this.show = !this.show;
        this.view = 0;
    },
    toggleShowProduk(){
        this.showProduk = !this.showProduk;
    },
    increment() {
      if(this.view < 3){
        this.view++
      }
    },
  }
}

</script>

<template>
   <NavigationBar />
   <div class="container-body">
      <News />
      <Promos />
      <Categories />
      <Collection />
      <!-- <DetailProduk /> -->
      <img class="cart-button" @click="toggleShow" src="../assets/img/cart.png" alt="cart-button">
   </div>

    <div v-if="show">
      <div class="container-payment">
        <Cart v-if="view===0" />
        <Shipping v-else-if="view===1" />
        <Payment v-else-if="view===2" />
        <Success v-else-if="view===3" />
        <div class="payment-btn-container">
          <div v-if="view===0" class="payment-btn" v-on:click="increment">Check Out Items</div>
          <div v-else-if="view===1" class="payment-btn" v-on:click="increment">Go To Payment</div>
          <div v-else-if="view===2" class="payment-btn" v-on:click="increment">Place Order</div>
        </div>
      </div>
      <div class="payment-overlay" @click="toggleShow"/>
    </div>

    <!-- <div v-if="showProduk">
      
      <div className="payment-overlay" @click="toggleShowProduk"/>
    </div> -->
</template>
