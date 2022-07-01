const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchCurrent = state => state.auth.user.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchCurrent,
};

export default authSelectors;
