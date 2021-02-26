import Vue from 'vue';

export default{

  getProfileInfo: async() =>{
  let resp = await Vue.http.get(`profile`)
                      /* .then(resp => resp.json())
                      .then(resp => {
                        console.log(resp)
                        return resp.body

                      }).catch( err => {
                        return err
                      }) */
    //console.log("resp",resp)
    return resp.body
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