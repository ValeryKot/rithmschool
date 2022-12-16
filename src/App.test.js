import React from 'react';
import App from '../App';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import SimpleComponent from '../SimpleComponent';
import { shallow, mount } from 'enzyme';

describe('<App />', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render one <SimpleComponent /> component', () => {
    expect(wrapper.find(SimpleComponent)).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('should render with a class of App-intro', () => {
    expect(wrapper.find('.App-intro')).toHaveLength(1);
  });

  it('should detect no state on shallow rendering', () => {
    expect(wrapper.state()).toBeNull();
  });

  it('should detect state and all h2s on mounting', () => {
    wrapper = mount(<App />);
    expect(wrapper.state('name')).toBe('My app!');
    expect(wrapper.find('h2')).toHaveLength(2);
  });
});