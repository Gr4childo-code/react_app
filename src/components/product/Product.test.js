import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

import Product from '../product';
import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];
Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
	it('should render confirm', () => {
		const wrapper = mount(<Product product={product} />);
		expect(wrapper.find('[data-id="product"]').length).toBe(1);
	});

	it('should init from 0 amount', () => {
		const wrapper = mount(<Product product={product} />);
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
	});

	it('should increment amount', () => {
		const wrapper = mount(<Product product={product} />);
		wrapper.find('[data-id="product-increment"]').simulate('click');
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
	});

	it('should decrement amount', () => {
		const wrapper = mount(<Product product={product} />);
		wrapper.find('[data-id="product-decrement"]').simulate('click');
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
	});

	it('should fetchData function', () => {
		const fn = jest.fn();
		mount(<Product product={product} fetchData={fn} />);
		expect(fn).toBeCalledWith(product.id);
	});
});
