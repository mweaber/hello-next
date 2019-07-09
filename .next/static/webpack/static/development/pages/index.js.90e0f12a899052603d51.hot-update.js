webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ============== Intro Example ========================
// This is the Link API
// import Link from 'next/link';
// import Layout from "../comps/MyLayout.js";
// export default function Index() {
//     return (
//         <Layout>
//             <p>Hello Next.js</p>
//         </Layout>
//     );
// }
// ================ Method 1 for Layouts ===================
// HOC Example index 
// import withLayout from '../comps/MyLayout2';
// const Page = () => <p>Hello Next.js</p>;
// export default withLayout(Page);
// ================ Method 2 for Layouts ==================
// Content as props example
// import Layout from '../comps/MyLayout3.js';
// const indexPageContent = <p>Hello Next.js</p>;
// export default function Index() {
//   return <Layout content={indexPageContent} />;
// }
// ================ Creating Dynamic Pages Example 1 =================
// import Layout from "../components/MyLayout";
// import Link from 'next/link';
// const PostLink = props => (
//     <li>
//       <Link href={`/post?title=${props.title}`}>
//         <a>{props.title}</a>
//       </Link>
//     </li>
//   );
//   export default function Blog() {
//     return (
//       <Layout>
//         <h1>My Blog</h1>
//         <ul>
//           <PostLink title="Hello Next.js" />
//           <PostLink title="Learn Next.js is awesome" />
//           <PostLink title="Deploy apps with Zeit" />
//         </ul>
//       </Layout>
//     );
//   }
// ========== Creating Dynamic Routing ==============
// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }
// ========== Data Fetching and API ==========
// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };
// export default Index;
// ========= Styling Pages w/ '

/***/ })

})
//# sourceMappingURL=index.js.90e0f12a899052603d51.hot-update.js.map