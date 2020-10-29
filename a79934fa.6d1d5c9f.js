(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},687:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(1006)),o={title:"Better List Views in React Native",author:"Spencer Ahrens",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/sahrens",authorImageURL:"https://avatars1.githubusercontent.com/u/1509831",authorTwitter:"sahrens2012",tags:["engineering"]},s={permalink:"/blog/2017/03/13/better-list-views",source:"@site/blog/2017-03-13-better-list-views.md",description:"Many of you have started playing with some of our new List components already after our teaser announcement in the community group, but we are officially announcing them today! No more ListViews or DataSources, stale rows, ignored bugs, or excessive memory consumption - with the latest React Native March 2017 release candidate (0.43-rc.1) you can pick from the new suite of components what best fits your use-case, with great perf and feature sets out of the box:",date:"2017-03-13T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Better List Views in React Native",readingTime:5.255,truncated:!1,prevItem:{title:"React Native Monthly #1",permalink:"/blog/2017/06/21/react-native-monthly-1"},nextItem:{title:"Introducing Create React Native App",permalink:"/blog/2017/03/13/introducing-create-react-native-app"}},l=[{value:"<FlatList>",id:"flatlist",children:[]},{value:"<SectionList>",id:"sectionlist",children:[]},{value:"<VirtualizedList>",id:"virtualizedlist",children:[]},{value:"Features",id:"features",children:[{value:"Some Caveats",id:"some-caveats",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Advanced Usage",id:"advanced-usage",children:[]},{value:"Future Work",id:"future-work",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Many of you have started playing with some of our new List components already after our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.facebook.com/groups/react.native.community/permalink/921378591331053"}),"teaser announcement in the community group"),", but we are officially announcing them today! No more ",Object(i.b)("inlineCode",{parentName:"p"},"ListView"),"s or ",Object(i.b)("inlineCode",{parentName:"p"},"DataSource"),"s, stale rows, ignored bugs, or excessive memory consumption - with the latest React Native March 2017 release candidate (",Object(i.b)("inlineCode",{parentName:"p"},"0.43-rc.1"),") you can pick from the new suite of components what best fits your use-case, with great perf and feature sets out of the box:"),Object(i.b)("h3",{id:"flatlist"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/flatlist"}),Object(i.b)("inlineCode",{parentName:"a"},"<FlatList>"))),Object(i.b)("p",null,"This is the workhorse component for simple, performant lists. Provide an array of data and a ",Object(i.b)("inlineCode",{parentName:"p"},"renderItem")," function and you're good to go:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<FlatList\n  data={[{title: 'Title Text', key: 'item1'}, ...]}\n  renderItem={({item}) => <ListItem title={item.title} />}\n/>\n")),Object(i.b)("h3",{id:"sectionlist"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/sectionlist"}),Object(i.b)("inlineCode",{parentName:"a"},"<SectionList>"))),Object(i.b)("p",null,"If you want to render a set of data broken into logical sections, maybe with section headers (e.g. in an alphabetical address book), and potentially with heterogeneous data and rendering (such as a profile view with some buttons followed by a composer, then a photo grid, then a friend grid, and finally a list of stories), this is the way to go."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<SectionList\n  renderItem={({item}) => <ListItem title={item.title} />}\n  renderSectionHeader={({section}) => <H1 title={section.key} />}\n  sections={[ // homogeneous rendering between sections\n    {data: [...], key: ...},\n    {data: [...], key: ...},\n    {data: [...], key: ...},\n  ]}\n/>\n\n<SectionList\n  sections={[ // heterogeneous rendering between sections\n    {data: [...], key: ..., renderItem: ...},\n    {data: [...], key: ..., renderItem: ...},\n    {data: [...], key: ..., renderItem: ...},\n  ]}\n/>\n")),Object(i.b)("h3",{id:"virtualizedlist"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/virtualizedlist"}),Object(i.b)("inlineCode",{parentName:"a"},"<VirtualizedList>"))),Object(i.b)("p",null,"The implementation behind the scenes with a more flexible API. Especially handy if your data is not in a plain array (e.g. an immutable list)."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"Lists are used in many contexts, so we packed the new components full of features to handle the majority of use cases out of the box:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scroll loading (",Object(i.b)("inlineCode",{parentName:"li"},"onEndReached"),")."),Object(i.b)("li",{parentName:"ul"},"Pull to refresh (",Object(i.b)("inlineCode",{parentName:"li"},"onRefresh")," / ",Object(i.b)("inlineCode",{parentName:"li"},"refreshing"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/CustomComponents/Lists/ViewabilityHelper.js"}),"Configurable")," viewability (VPV) callbacks (",Object(i.b)("inlineCode",{parentName:"li"},"onViewableItemsChanged")," / ",Object(i.b)("inlineCode",{parentName:"li"},"viewabilityConfig"),")."),Object(i.b)("li",{parentName:"ul"},"Horizontal mode (",Object(i.b)("inlineCode",{parentName:"li"},"horizontal"),")."),Object(i.b)("li",{parentName:"ul"},"Intelligent item and section separators."),Object(i.b)("li",{parentName:"ul"},"Multi-column support (",Object(i.b)("inlineCode",{parentName:"li"},"numColumns"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scrollToEnd"),", ",Object(i.b)("inlineCode",{parentName:"li"},"scrollToIndex"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"scrollToItem")),Object(i.b)("li",{parentName:"ul"},"Better Flow typing.")),Object(i.b)("h3",{id:"some-caveats"},"Some Caveats"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The internal state of item subtrees is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"These components are based on ",Object(i.b)("inlineCode",{parentName:"p"},"PureComponent")," which means that they will not re-render if ",Object(i.b)("inlineCode",{parentName:"p"},"props")," remains shallow-equal. Make sure that everything your ",Object(i.b)("inlineCode",{parentName:"p"},"renderItem")," function depends on directly is passed as a prop that is not ",Object(i.b)("inlineCode",{parentName:"p"},"===")," after updates, otherwise your UI may not update on changes. This includes the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," prop and parent component state. For example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<FlatList\n  data={this.state.data}\n  renderItem={({ item }) => (\n    <MyItem\n      item={item}\n      onPress={() =>\n        this.setState((oldState) => ({\n          selected: {\n            // New instance breaks `===`\n            ...oldState.selected, // copy old data\n            [item.key]: !oldState.selected[item.key] // toggle\n          }\n        }))\n      }\n      selected={\n        !!this.state.selected[item.key] // renderItem depends on state\n      }\n    />\n  )}\n  selected={\n    // Can be any prop that doesn't collide with existing props\n    this.state.selected // A change to selected should re-render FlatList\n  }\n/>\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"By default, these new lists look for a ",Object(i.b)("inlineCode",{parentName:"p"},"key")," prop on each item and use that for the React key. Alternatively, you can provide a custom ",Object(i.b)("inlineCode",{parentName:"p"},"keyExtractor")," prop."))),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"Besides simplifying the API, the new list components also have significant performance enhancements, the main one being nearly constant memory usage for any number of rows. This is done by 'virtualizing' elements that are outside of the render window by completely unmounting them from the component hierarchy and reclaiming the JS memory from the react components, along with the native memory from the shadow tree and the UI views. This has a catch which is that internal component state will not be preserved, so ",Object(i.b)("strong",{parentName:"p"},"make sure you track any important state outside of the components themselves, e.g. in Relay or Redux or Flux store.")),Object(i.b)("p",null,"Limiting the render window also reduces the amount of work that needs to be done by React and the native platform, e.g from view traversals. Even if you are rendering the last of a million elements, with these new lists there is no need to iterate through all those elements in order to render. You can even jump to the middle with ",Object(i.b)("inlineCode",{parentName:"p"},"scrollToIndex")," without excessive rendering."),Object(i.b)("p",null,"We've also made some improvements with scheduling which should help with application responsiveness. Items at the edge of the render window are rendered infrequently and at a lower priority after any active gestures or animations or other interactions have completed."),Object(i.b)("h2",{id:"advanced-usage"},"Advanced Usage"),Object(i.b)("p",null,"Unlike ",Object(i.b)("inlineCode",{parentName:"p"},"ListView"),", all items in the render window are re-rendered any time any props change. Often this is fine because the windowing reduces the number of items to a constant number, but if your items are on the complex side, you should make sure to follow React best practices for performance and use ",Object(i.b)("inlineCode",{parentName:"p"},"React.PureComponent")," and/or ",Object(i.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," as appropriate within your components to limit re-renders of the recursive subtree."),Object(i.b)("p",null,"If you can calculate the height of your rows without rendering them, you can improve the user experience by providing the ",Object(i.b)("inlineCode",{parentName:"p"},"getItemLayout")," prop. This makes it much smoother to scroll to specific items with e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"scrollToIndex"),", and will improve the scroll indicator UI because the height of the content can be determined without rendering it."),Object(i.b)("p",null,"If you have an alternative data type, like an immutable list, ",Object(i.b)("inlineCode",{parentName:"p"},"<VirtualizedList>")," is the way to go. It takes a ",Object(i.b)("inlineCode",{parentName:"p"},"getItem")," prop that lets you return the item data for any given index and has looser flow typing."),Object(i.b)("p",null,"There are also a bunch of parameters you can tweak if you have an unusual use case. For example, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"windowSize")," to trade off memory usage vs. user experience, ",Object(i.b)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," to adjust fill rate vs. responsiveness, ",Object(i.b)("inlineCode",{parentName:"p"},"onEndReachedThreshold")," to control when scroll loading happens, and more."),Object(i.b)("h2",{id:"future-work"},"Future Work"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Migration of existing surfaces (ultimately deprecation of ",Object(i.b)("inlineCode",{parentName:"li"},"ListView"),")."),Object(i.b)("li",{parentName:"ul"},"More features as we see/hear the need (let us know!)."),Object(i.b)("li",{parentName:"ul"},"Sticky section header support."),Object(i.b)("li",{parentName:"ul"},"More performance optimizations."),Object(i.b)("li",{parentName:"ul"},"Support functional item components with state.")))}p.isMDXComponent=!0}}]);