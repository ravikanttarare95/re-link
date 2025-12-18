type AuthView = "login" | "signup";

const authPanelContent: Record<AuthView, { title: string; subtitle: string }> =
  {
    login: {
      title: "Welcome Back",
      subtitle: "Login to continue your journey",
    },
    signup: {
      title: "Create Account",
      subtitle: "Sign up to get started with ReLink",
    },
  };
export { authPanelContent, type AuthView };
