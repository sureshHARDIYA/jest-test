jest.mock('../request')

import * as posts from '../posts'

it('Should render post with ID 1 and should work with resolve.', () => {
  expect.assertions(1)
  return expect(posts.getPosts(1)).resolves.toEqual({
    title: 'This is post title one',
    description: 'This is the post description one'
  })
})

it('Should handle 404 errors.', () => {
  expect.assertions(1)
  return expect(posts.getPosts(3)).rejects.toEqual({
    error: {
      message: 'Posts with 3 not found in the Database.',
      status: 404
    }
  })
})
