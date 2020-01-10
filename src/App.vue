<template>
  <li><label class="container">LICENSE PLAN #{{label}} <span style="margin-left:200px">{{ price | toUSD }} per license</span>
        <input type="radio" :value="label" :name="name" v-model="radioButtonValue">
        <span class="checkmark"></span>
      </label></li> 
</template>

<script>
export default {
  name: 'radio-button',
  props: ['name', 'label', 'value', 'price'],
  computed: {
      radioButtonValue: {
          get: function() {
              return this.value
          },
          set: function() {               
              this.$emit("change", this.label)
          }
      }
  }
}
</script>

<style>
body {
  margin: 20px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
 /* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-top:12px;
  margin-left:5px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 27px;
  width: 27px;
  background-color: #eee;
  border-radius: 50%;
  border: 3px solid #ddd;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
ul li{
  list-style:none
}
ul li:hover {
background-color: #EAF2F8;
  border:1px #EAF2F8;
}


/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: white;
  border: 3px solid #3C5B76;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 5px;
	left: 5px;
	width: 11px;
	height: 11px;
	border-radius: 50%;
	background: #0691BE;
}
</style>
