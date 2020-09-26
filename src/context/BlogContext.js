import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    //state is array
    //action type is add, del etc...
    switch (action.type)
    {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    //blog post is for single post there sum is in state
    const addBlogPost = () => {
        dispatch( {type: 'add_blogpost'} );
    }
    

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost }}>    
        {children}
        </BlogContext.Provider>;
}                                                   

export default BlogContext;