const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const regexUrl = new RegExp(regex)

export default {
    data: () => ({
        username: null,
        textarea: null,
        url: null,
        price: null,
        realPrice: null,
        indicatorChange: false,
    }),
    methods: {

        addToList() {
            // send data to our list
            console.log('%c form submitted ', 'color: #D7953FFF;', this.username, this.textarea, this.url, this.modelPrice)

            this.$store.commit('[products] ADD_TO_LIST', {
                username: this.username,
                textarea: this.textarea,
                price: this.modelPrice
            });
        },

        resetForm() {

            this.username = null;
            this.textarea = null;
            this.url = null;
            this.price = null;
            this.realPrice = null;
            this.indicatorChange = true;

            return alert("Товар был добавлен в список");
        }
    },
    computed: {
        isDisabled() {
            return this.username === null
                || this.textarea === null
                || !this.isValidUrl
                || !this.modelPrice

        },

        isValidUrl() {
            if (this.url) {
                return this.url.match(regexUrl)
            } else {
                return false
            }
        },


        modelPrice: {
            get() {
                return this.indicatorChange ? this.realPrice : this.realPrice.toLocaleString()
            },
            set(value) {
                this.realPrice = +value.replace(/\s/g, "")
            },
        },
    },
    created() {
        this.realPrice = this.value || ""
    },
}
