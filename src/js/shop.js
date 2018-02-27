var data = {
    items: [{
            text: 'Banan',
            checked: true
        },
        {
            text: 'Jabłka',
            checked: false
        }],
    title: "Lista zakupów",
    newItem: ""
};

Vue.component('add-item-component', {
    template: '#add-item-template',
    data: function () {
        return {
            newItem: ''
        }
    },
    methods: {
        addItem: function(){
            var text;
            text = this.newItem.trim();
            if(text){
                this.$emit('add', this.newItem);
                this.newItem = '';
            }
        }
    }
});

Vue.component('item-component', {
    template: '#item-template',
    props: ['item']
});

Vue.component('items-component', {
    template: '#items-template',
    props: ['items']
});

Vue.component('change-title-component', {
    template: '#change-title-template',
    props: ['value'],
    methods: {
        onInput: function (event) {
            this.$emit('input', event.target.value)
        }
    }
});


new Vue({
    el: '#app',
    data: data,
    methods: {
        addItem: function (text) {
            this.items.push({
                text: text,
                checked: false
            })
        }
    }
});
