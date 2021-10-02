import commentReducer from '../commentReducer';
import {SAVE_COMMENT} from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentReducer([], action);

  expect(newState).toEqual(['New Comment']);
})

it('handles actions with unknown type', () => {
  const newState = commentReducer([], {type: 'JFSKA;JK'});

  expect(newState).toEqual([]);
})