import Vue from 'vue';

export default{

  getProfileInfo: async() =>{
    let data = await Vue.http.get(`profile`)
    return data.body
  },

  getResume : async () => {
    let data = await Vue.http.get(`resume`)
    return data.body
  },

  getCategories: async () => {
    let data = await Vue.http.get(`categories`)
    return data.body
  },

  getProjects: async () => {
    let data = await Vue.http.get(`projects`)
    return data.body
  },

  getPosts: async () => {
    let data = await Vue.http.get(`posts`)
    return data.body
  },
  getPostBySlug: async (context, {slug}) => {
    let data = await Vue.http.get(`posts?slug=${slug}`);
    return data.body[0]
  },
}