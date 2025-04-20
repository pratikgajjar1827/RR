import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Helper/Layout.jsx";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneSingle from "./components/HomeOne/index-single.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeTwoSingle from "./components/HomeTwo/index-single.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeThreeSingle from "./components/HomeThree/index-single.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFourSingle from "./components/HomeFour/index-single.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeFiveSingle from "./components/HomeFive/index-single.jsx";
import HomeSix from "./components/HomeSix/index.jsx";
import HomeSixSingle from "./components/HomeSix/index-single.jsx";
import HomeSeven from "./components/HomeSeven/index.jsx";
import HomeSevenSingle from "./components/HomeSeven/index-single.jsx";
import HomeEight from "./components/HomeEight/index.jsx";
import HomeEightSingle from "./components/HomeEight/index-single.jsx";
import HomeNine from "./components/HomeNine/index.jsx";
import HomeNineSingle from "./components/HomeNine/index-single.jsx";
import HomeTen from "./components/HomeTen/index.jsx";
import HomeTenSingle from "./components/HomeTen/index-single.jsx";
import HomeEleven from "./components/HomeEleven/index.jsx";
import HomeElevenSingle from "./components/HomeEleven/index-single.jsx";
import HomeTwelve from "./components/HomeTwelve/index.jsx";
import HomeTwelveSingle from "./components/HomeTwelve/index-single.jsx";
import HomeThirteen from "./components/HomeThirteen/index.jsx";
import HomeThirteenSingle from "./components/HomeThirteen/index-single.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Services from "./components/ServicesPages/index.jsx";
import ServicesDetails from "./components/ServicesPages/ServicesDetails.jsx";
import Portfolio from "./components/PortfolioPages/index.jsx";
import PortfolioDetails from "./components/PortfolioPages/PortfolioDetails.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import Team from "./components/TeamPages/index.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import Pricing from "./components/PricingPages/Pricing.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },     
      {
        path: "/index-single",
        element: <HomeOneSingle />
      },     
      {
        path: "/index-2",
        element: <HomeTwo />
      },
      {
        path: "/index-2-single",
        element: <HomeTwoSingle />
      },
      {
        path: "/index-3",
        element: <HomeThree />
      },
      {
        path: "/index-3-single",
        element: <HomeThreeSingle />
      },
      {
        path: "/index-4",
        element: <HomeFour />
      },
      {
        path: "/index-4-single",
        element: <HomeFourSingle />
      },
      {
        path: "/index-5",
        element: <HomeFive />
      },
      {
        path: "/index-5-single",
        element: <HomeFiveSingle />
      },
      {
        path: "/index-6",
        element: <HomeSix />
      },
      {
        path: "/index-6-single",
        element: <HomeSixSingle />
      },
      {
        path: "/index-7",
        element: <HomeSeven />
      },
      {
        path: "/index-7-single",
        element: <HomeSevenSingle />
      },
      {
        path: "/index-8",
        element: <HomeEight />
      },
      {
        path: "/index-8-single",
        element: <HomeEightSingle />
      },
      {
        path: "/index-9",
        element: <HomeNine />
      },
      {
        path: "/index-9-single",
        element: <HomeNineSingle />
      },
      {
        path: "/index-10",
        element: <HomeTen />
      },
      {
        path: "/index-10-single",
        element: <HomeTenSingle />
      },
      {
        path: "/index-11",
        element: <HomeEleven />
      },
      {
        path: "/index-11-single",
        element: <HomeElevenSingle />
      },
      {
        path: "/index-12",
        element: <HomeTwelve />
      },
      {
        path: "/index-12-single",
        element: <HomeTwelveSingle />
      },
      {
        path: "/index-13",
        element: <HomeThirteen />
      },
      {
        path: "/index-13-single",
        element: <HomeThirteenSingle />
      },
      {
        path: "/page-about",
        element: <AboutUs />
      },
      {
        path: "/page-services",
        element: <Services />
      },
      {
        path: "/page-Portfolio",
        element: <Portfolio />
      },
      {
        path: "/page-portfolio-details",
        element: <PortfolioDetails />
      },
      {
        path: "/page-projects",
        element: <Projects />
      },
      {
        path: "/page-project-details",
        element: <ProjectsDetails />
      },
      {
        path: "/shop-products",
        element: <Products />
      },
      {
        path: "/shop-cart",
        element: <Cart />
      },
      {
        path: "/shop-checkout",
        element: <Checkout />
      },
      {
        path: "/shop-products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "/shop-product-details",
        element: <ProductsDetails />
      },
      {
        path: "/news-grid",
        element: <News />
      },
      {
        path: "/news-details",
        element: <NewsDetails />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/page-team",
        element: <Team />
      },
      {
        path: "/page-team-details",
        element: <TeamDetails />
      },
      {
        path: "/page-testimonial",
        element: <Testimonial />
      },
      {
        path: "/page-Faq",
        element: <Faq />
      },
      {
        path: "/page-service-details",
        element: <ServicesDetails />
      },
      {
        path: "/page-pricing",
        element: <Pricing />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;