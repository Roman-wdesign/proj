import Product from "@/components/Product";
import { mount } from '@vue/test-utils';

test('emits an event when clicked', () => {

        const wrapper = mount(Product)
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('deleteFromList')
})

