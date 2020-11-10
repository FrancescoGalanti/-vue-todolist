/*
**javascript
**/


 // vue //

// dom in which we operate in vue //
 var app = new Vue({
   el: '#app',
   data: {
     // To-do list array
      items:["doing grocery-shop", "washing the car","do the laundry"]

   },
   // Methods //
   methods:{
     // Call back function that add a new item in the list //
     additem(){
       this.items.push(this.newitem)
       this.newitem = "";
     },
     // call back function that eliminate the item in the list
     removeitem(array,index){
       Vue.delete(this.items, index);
     }

   }


 })
