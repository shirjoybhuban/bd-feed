import Footer from "../footer";
import Topbar from "../topbar";

const Layout = ({ children }) => {
  // Auth logic will be handeled by custom Auth hook
  // const { isLoggedIn, router, isProfileCompleted, logout } = useAuth();

  return (
    <div>
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
