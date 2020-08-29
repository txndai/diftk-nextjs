import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full mx-auto md:pb-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
