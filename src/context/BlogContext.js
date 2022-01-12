import react from 'react'

const BlogContext = react.createContext();

export const BlogProvider = ({children}) => {
    const BlogPosts = [{
        title: 'Title 1'
    },{
        title: 'Title 2'
    }];
    return(
        <BlogContext.Provider value={BlogPosts}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;