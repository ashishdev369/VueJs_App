<template>
  <div>
       <h1>Checkout</h1>
       <ul>
          <radio-button v-for="license in licenses" name="license" :label="license.id" :price="license.price" :value="selectedPlan" @change="changePlan"/>
         
         </ul>
         <section>
  <div class="col-md-12">
    <center><label><b>Number of lincenses: </b></label>
      <select name="license-number" class="form-control license-number" v-model="qty">
        <option value="5">5 </option>
        <option value="10">10 </option>
         <option value="20">20 </option>
      </select></center>
    <hr />
  </div>
</section>
<div class="col-md-12">
  <div style="text-align:center;margin-bottom:10px;"><span>TOTAL: {{ calculateTotalPrice() | toUSD }}<sup>US</sup></span></div>
  <div>
    <center><button type="button" id="buy_now" name="buy-now" class="btn btn-success"> BUY NOW </button></center>
    <div style="margin-top:20px;text-align:center">
      <span style="font-style:Arial Rounded MT Bold;color:blue;">Selected plan: #{{selectedPlan}}</span>
    </div>
  </div>
</div>
      </div>
</template>

<script>
import App from './App.vue';
export default {
  data: function() {
      return {
          qty: 10,
          totalPrice: 0,
          selectedPlan: 3,
          licenses: [{id:1,price:13},
                     {id:2,price:22},
                     {id:3,price:34}]
      }
  },
  methods: {
      changePlan: function(newValue) {
          this.selectedPlan = newValue;
          this.calculateTotalPrice();
      },
      calculateTotalPrice: function() {
          let price = this.licenses.filter(lic => lic.id===this.selectedPlan)[0].price
          return (price * this.qty);
      }
  },
  components: {
    'radio-button' : App
  }
}
</script>

<style>
.license-number {
  width:150px
}
</style>
