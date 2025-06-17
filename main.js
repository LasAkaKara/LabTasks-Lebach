const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            sizes: ['XL', 'L', 'M', 'S', 'XS' ]
        }
    }
})
