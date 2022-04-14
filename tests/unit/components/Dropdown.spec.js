import Dropdown from "@/components/Dropdown";
import { mount } from '@vue/test-utils';

test('emits an event when clicked', () => {

    const wrapper = mount(Dropdown)
    wrapper.find('div').trigger('click')
    expect(wrapper.emitted('selectOption'))


})

