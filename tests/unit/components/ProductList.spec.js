import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import ProductList from "@/components/ProductList";
import products from "@/store/modules/products";

const localVue = createLocalVue()
localVue.use(Vuex)



describe('ProductList.vue', () => {
    let state
    let store

    beforeEach(() => {

        state = {
            products:  [
                {
                    id: 1,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '10 000 руб.'
                },
                {
                    id: 2,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '2 833 руб.'
                },
                {
                    id: 3,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '6 542 руб.'
                },
                {
                    id: 4,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '1 278 руб.'
                },
                {
                    id: 5,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '2 344 руб.'
                },
                {
                    id: 6,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '9 120 руб.'
                },
                {
                    id: 7,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '10 000 руб.'
                },
                {
                    id: 8,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '1 400 руб.'
                },
                {
                    id: 9,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '10 000 руб.'
                },
                {
                    id: 10,
                    username: 'Наименование товара',
                    textarea: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    number: '10 000 руб.'
                },
            ]
        }

        store = new Vuex.Store({
            modules: {
                products: {
                    state,
                    getters: products.getters
                }
            }
        })
    })

    it('render products', () => {
        const wrapper = shallowMount(ProductList, {store, localVue})
        expect(wrapper.find('div')).toBeTruthy()
    })

})
