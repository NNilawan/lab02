const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            // 4.9
            productDetail: 'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf'
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        updateRemoveCart(id) {
            index = this.cart.indexOf(id);
            this.cart.splice(index, 1);
        }
    }

})