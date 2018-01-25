import request from './request'

export function getPosts(postID) {
  return request('/posts/' + postID).then(post => ({
    title: post.title,
    description: post.description
  }))
}
