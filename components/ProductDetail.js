app.component('product-details', {
    props: {
        detail: {
            type: String,
            required: true
        }
    },
    template:
    /* html*/
        `<div class="product-details">
            <p>Product Detail: {{detail}}</p>
        </div>
        `
})