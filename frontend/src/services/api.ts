import  axios  from "axios";

export const uploads='http://localhost/blog/backend/img/'

const api=axios.create({
    baseURL : 'http://localhost/blog/backend/data/'
})

async function showCategories(){
    const response= await api.get('categories.php')

    return response.data
}

async function showPosts() {
    const response= await api.get('posts.php')

    return response.data
}

export const userServices={
    showCategories,
    showPosts
}
