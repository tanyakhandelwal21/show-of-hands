import React from 'react';
import { shallow } from 'enzyme';
import { AnswerPollPage } from '../../components/AnswerPollPage';

test('should correctly render AnswerPollPage', () => {
  const wrapper = shallow(<AnswerPollPage />);
  expect(wrapper).toMatchSnapshot();
});
