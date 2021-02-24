export const goToHomePage = (history) => {
  history.push("/")
}

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToRegisterPage = (history) => {
  history.push("/register");
};

export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToPostsDetailPage = (history) => {
  history.push("/detail/:id")
}

export const goToPostsPage = (history) => {
  history.push("/posts");
};
