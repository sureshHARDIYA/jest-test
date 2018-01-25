const posts = {
  1: {
    title: 'This is post title one',
    description: 'This is the post description one'
  },
  2: {
    title: 'This is post title two',
    description: 'This is the post description two'
  }
}

const request = url => {
  return new Promise((resolve, reject) => {
    const postID = parseInt(url.substr('/posts/'.length), 10)
    process.nextTick(
      () =>
        posts[postID]
          ? resolve(posts[postID])
          : reject({
              error: {
                message: 'Posts with ' + postID + ' not found in the Database.',
                status: 404
              }
            })
    )
  })
}

export default request
