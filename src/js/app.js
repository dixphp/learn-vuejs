Vue.component('form-component', {
   template: '#form',
    props: ['value'],
    methods: {
        onInput: function(event){
            this.$emit('input', event.target.value)
        }
    }
});



Vue.component('hello-component', {
   template: '#hello',
   data: function(){
       return {
           msg: 'Witaj'
       }
   },
    props: ['user']
});

Vue.component('greetings-component', {
   template: '#greetings',
    data: function(){
    return {
    user: 'hero'
}
}
});

new Vue({
   el: '#app'
});