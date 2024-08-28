export const Tab_CONFIG = [
  {
    id: 1,
    header: "Throttling",
    content: `const throttle = (cb, delay) => {
        let timer;
        return function (...args) {
            if (!timer) {
              cb(...args);
            timer=setTimeout(() => {
            timer=null
            }, delay);
          };
        }
      };
      `,
    image: "https://www.vehidtrtak.com/js-throttle.png",
  },
  {
    id: 2,
    header: "Debouncing",
    content: `const debounce=(cb, delay)=>{
        let timer;
        return function(...args){
            if(timer)clearTimeout(timer);
            timer= setTimeout(() => {
                cb(...args);
            }, delay);
        }
      }
     `,
    image:
      "https://media.licdn.com/dms/image/C5112AQEuTfvvgzW3ig/article-cover_image-shrink_720_1280/0/1578565008160?e=2147483647&v=beta&t=gulIwIUyx0BtB6JKkbz6wF4tECFXtC1NLY_zSwFTZ4M",
  },
  {
    id: 3,
    header: "Memoization",
    content: `
        useMemo: The useMemo is a hook used
        in the functional component of react 
        that returns a memoized value.
        useCallback: The useMemo and useCallback Hooks are similar. 
        The main difference is that useMemo returns a memoized 
        value and useCallback 
        returns a memoized function
        React.memo: Memo is a higher-order component that 
        is used to memoize a component, 
        which means it caches the output
         of the component and only re-renders 
         it if its props have changed.
        This can be useful when a component’s 
        rendering is expensive, and you want to avoid unnecessary re-renders.
        Memo can be imported from ‘react’ and
         wrapped around a functional component.
      `,
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1678489621478/e4d1a454-f9c5-49d7-acd3-494db48e750f.png",
  },
];
