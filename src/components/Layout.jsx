import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = (props) => {
  return (
    <div className={`${props.background} d-flex flex-column min-vh-100`}>
      <Header />
      <main className="flex-grow-1">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
