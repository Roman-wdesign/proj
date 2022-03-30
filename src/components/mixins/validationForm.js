


const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const regexUrl = new RegExp(regex)

export default {

    data: () => ({
        username: null,
        textarea: null,
        url: null,
        number: null,
        realNumber: null,
        indicatorChange: false,
    }),
    methods: {

        addToList() {
            // send data to our list
            console.log('%c form submitted ', 'color: #D7953FFF;', this.username, this.textarea, this.url, this.modelNumber)

            this.$store.commit('ADD_TO_LIST', {
                username: this.username,
                textarea: this.textarea,
                number: this.modelNumber
            });
        },

        resetForm() {

            this.username = null;
            this.textarea = null;
            this.url = null;
            this.number = null;
            this.realNumber = null;
            this.indicatorChange = true;

            return alert("Товар был добавлен в список");
        }
    },
    computed: {
        isDisabled() {
            return this.username === null
                || this.textarea === null
                || !this.isValidUrl
                || !this.modelNumber

        },

        isValidUrl() {
            if (this.url) {
                return this.url.match(regexUrl)
            } else {
                return false
            }
        },


        modelNumber: {
            get() {
                return this.indicatorChange ? this.realNumber : this.realNumber.toLocaleString()
            },
            set(value) {
                this.realNumber = +value.replace(/\s/g, "")
            },
        },
    },
    created() {
        this.realNumber = this.value || ""
    },

}
