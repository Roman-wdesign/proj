
import Header from "@/components/slot/Header";
import { mount } from '@vue/test-utils'

describe('Header', () => {
    it('renders a div', () => {
        const wrapper = mount(Header)
        expect(wrapper.find('div')).toBeTruthy()
    })
})