import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

import Reviews from '../reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
	it('should render confirm', () => {
		const wrapper = mount(<Reviews reviews={reviews} />);
		expect(wrapper.find('[data-id="Reviews"]').length).toBe(2);
	});
});
