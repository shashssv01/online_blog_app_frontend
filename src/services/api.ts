import axios from 'axios';
import {Blog} from '../models/Blog.ts';


const api = axios.create({
    baseURL: `http://localhost:80`,
    // timeout: 1000,
    headers: {"Access-Control-Allow-Origin": "*"},
});

// Why the name 'httpClient" here ? Need to ask Anand
// These functions are for /blogs endpoints
export const getBlogs = async (): Promise<Blog[]> => {
    const { data } = await api.get(`/blogs`);
    return data;
  };
// Since, many values are returned,we are using arrays  , otherwise we would be using only the typeof model
export const getBlogId = async (id: string): Promise<Blog> =>{
    const { data } = await api.get(`/blogs/${id}`);
    return data;
}
// So while passing object also , we have to make sure that id and createAt are not included
export const createBlog = async (blog: Omit<Blog,"!_id" | "createdAt">) : Promise<void> => {
    await api.post("/blogs", blog)
}
export const updateBlog = async (id: string, blog: Omit<Blog, "_id" | "createdAt">): Promise<void> => {
    await api.put(`/blogs/${id}`, blog);
  };
export const deleteBlog = async (id: string): Promise<void> => {
    await api.delete(`/blogs/${id}`);
};

// For JWT tokens
export const login = async (username: string, password: string)=>{
    try{
        const response = await axios.post('/api/login', {username, password});
        const { token } = response.data;
        localStorage.setItem('jwtToken', token); // Save token
    }
    catch(err){
        console.log("login failed:", err);
    }
};

//For Sending Tokens with Requests
export const fetchUserData = async () =>{
    const token = localStorage.getItem('jwtToken');
    try{
        const res = await axios.get('/api/userToken', {
            headers: {
                Authorization: `${token}`
            }
        });
        console.log(res.data);
    }
    catch(err){
        console.log("Error while fetching data");
    }
};