
import { mount } from '@vue/test-utils'
import Form from "@/components/Form";
import Dropdown from "@/components/Dropdown";
import Product from "@/components/Product";
import Header from "@/components/slot/Header";


describe('Header', () => {
  it('renders a div', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('div')).toBeTruthy()
  })
})
describe('Form', () => {
  it('renders a input', () => {
    const wrapper = mount(Form)
    expect(wrapper.find('input')).toBeTruthy()
  })
  it('renders a div', () => {
    const wrapper = mount(Form)
    expect(wrapper.find('div')).toBeTruthy()
  })
  it('renders a textarea', () => {
    const wrapper = mount(Form)
    expect(wrapper.find('textarea')).toBeTruthy()
  })
  it('renders a button', () => {
    const wrapper = mount(Form)
    expect(wrapper.find('button')).toBeTruthy()
  })
  it('Нажатие на кнопку button', () => {
    const wrapper = mount(Form)
    wrapper.find('button').trigger('click')
  })
})
describe('Dropdown', () => {
  it('renders a div', () => {
    const wrapper = mount(Dropdown)
    expect(wrapper.find('div')).toBeTruthy()
  })
  it('renders a span', () => {
    const wrapper = mount(Dropdown)
    expect(wrapper.find('span')).toBeTruthy()
  })
  it('renders a li', () => {
    const wrapper = mount(Dropdown)
    expect(wrapper.find('li')).toBeTruthy()
  })

})
describe('Product', () => {
  it('renders a div', () => {
    const wrapper = mount(Product)
    expect(wrapper.find('div')).toBeTruthy()
  })
})
