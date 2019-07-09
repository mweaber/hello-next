webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Matt\\Desktop\\Projects\\hello-next\\pages\\index.js";


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
// ========= Styling Pages w/ 'styled-jsx' =========



function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, post.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "344512576",
    __self: this
  }, "h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}ul.jsx-344512576{padding:0;}li.jsx-344512576{list-style:none;margin:5px 0;}a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-344512576:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWF0dFxcRGVza3RvcFxcUHJvamVjdHNcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSmtCLEFBSStCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXR0XFxEZXNrdG9wXFxQcm9qZWN0c1xcaGVsbG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT0gSW50cm8gRXhhbXBsZSA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVGhpcyBpcyB0aGUgTGluayBBUElcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTXlMYXlvdXQuanNcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG4vLyAgICAgICAgIDwvTGF5b3V0PlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PSBNZXRob2QgMSBmb3IgTGF5b3V0cyA9PT09PT09PT09PT09PT09PT09XHJcbi8vIEhPQyBFeGFtcGxlIGluZGV4IFxyXG5cclxuICAgIC8vIGltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2NvbXBzL015TGF5b3V0Mic7XHJcblxyXG4gICAgLy8gY29uc3QgUGFnZSA9ICgpID0+IDxwPkhlbGxvIE5leHQuanM8L3A+O1xyXG5cclxuICAgIC8vIGV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoUGFnZSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09IE1ldGhvZCAyIGZvciBMYXlvdXRzID09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQ29udGVudCBhcyBwcm9wcyBleGFtcGxlXHJcblxyXG4gICAgLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9NeUxheW91dDMuanMnO1xyXG5cclxuICAgIC8vIGNvbnN0IGluZGV4UGFnZUNvbnRlbnQgPSA8cD5IZWxsbyBOZXh0LmpzPC9wPjtcclxuXHJcbiAgICAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIC8vICAgcmV0dXJuIDxMYXlvdXQgY29udGVudD17aW5kZXhQYWdlQ29udGVudH0gLz47XHJcbiAgICAvLyB9XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09IENyZWF0aW5nIER5bmFtaWMgUGFnZXMgRXhhbXBsZSAxID09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiO1xyXG4gICAgLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbiAgICAvLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcclxuICAgIC8vICAgICA8bGk+XHJcbiAgICAvLyAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuICAgIC8vICAgICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuICAgIC8vICAgICAgIDwvTGluaz5cclxuICAgIC8vICAgICA8L2xpPlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG4gICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgICA8TGF5b3V0PlxyXG4gICAgLy8gICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbiAgICAvLyAgICAgICAgIDx1bD5cclxuICAgIC8vICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cclxuICAgIC8vICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxyXG4gICAgLy8gICAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XHJcbiAgICAvLyAgICAgICAgIDwvdWw+XHJcbiAgICAvLyAgICAgICA8L0xheW91dD5cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICB9XHJcblxyXG4vLyA9PT09PT09PT09IENyZWF0aW5nIER5bmFtaWMgUm91dGluZyA9PT09PT09PT09PT09PVxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxyXG4vLyAgIDxsaT5cclxuLy8gICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxyXG4vLyAgICAgICA8YT57cHJvcHMuaWR9PC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgIDwvbGk+XHJcbi8vICk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbi8vICAgICAgIDx1bD5cclxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiAvPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIC8+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XHJcbi8vICAgICAgIDwvdWw+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyA9PT09PT09PT09IERhdGEgRmV0Y2hpbmcgYW5kIEFQSSA9PT09PT09PT09XHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcbi8vICAgPExheW91dD5cclxuLy8gICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxyXG4vLyAgICAgPHVsPlxyXG4vLyAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxyXG4vLyAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxyXG4vLyAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cclxuLy8gICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XHJcbi8vICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L3VsPlxyXG4vLyAgIDwvTGF5b3V0PlxyXG4vLyApO1xyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5cclxuLy8gPT09PT09PT09IFN0eWxpbmcgUGFnZXMgdy8gJ3N0eWxlZC1qc3gnID09PT09PT09PVxyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxyXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxyXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxyXG4gIF07XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgPGxpPlxyXG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cclxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvbGk+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Matt\\Desktop\\Projects\\hello-next\\pages\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.7b90deffc46d98f255de.hot-update.js.map