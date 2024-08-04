import PostList from "@/components/PostList";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SectionOne from "@/components/SectionOne";
import Footer from "@/components/Footer";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import Contact from "@/components/Contact";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <PostList />
      <Contact />
      <Footer />
      <Script src="/js/jquery.min.js"/>
			<Script src="/js/jquery.scrollex.min.js"/>
			<Script src="/js/jquery.scrolly.min.js"/>
			<Script src="/js/browser.min.js"/>
			<Script src="/js/breakpoints.min.js"/>
			<Script src="/js/util.js"/>
			<Script src="/js/main.js"/>
      {/* <PostList /> */}
    </>
  );
}
