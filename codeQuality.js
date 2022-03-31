// level {1/2/3}
  //level 2 

  async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    // let user = doc[0];
    // let Profile = doc[1];
    // let p = doc[2];
  
    const userProfile = {
      user: doc[0],
      profile: doc[1],
      posts:doc[2]
    };
   // let {user, profile, posts} = userProfile
    return userProfile;
  }