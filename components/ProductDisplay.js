app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        detail: {
            type: String,
            required: true
        }
    },

    template:
    /* html*/
        `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title}}</h1>
               
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <div 
                    v-for="(variant,index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)" 
                    class="color-circle" 
                    :style="{backgroundColor: variant.color}">
                </div>

                <button 
                    class=" button " 
                    :class="{disabledButton: !inStock}" 
                    :disabled='!inStock' 
                    v-on:click="addToCart ">
                    Add to Cart
                </button>

                <button 
                class=" button " 
                :class="{disabledButton: !inStock}" 
                :disabled='!inStock' 
                v-on:click="removeFromCart ">
                Remove from Cart
                </button>

            </div>
            
            <div class="product-details">
            <p>Product Detail: {{detail}}</p>
            </div>

        </div>
    </div>`,
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            // inStock: false,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            selectedVariant: 0,
            // cart: 0,
            onSale: true

        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        }

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
                // title = this.brand + ' ' + this.product
                // if (this.onSale) a += ' is on sale'
                // return title
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        //  option 2
        onSaleTiltle() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            } else {
                return ''
            }
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 30
        }
    }
})