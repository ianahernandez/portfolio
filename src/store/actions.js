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
    let data = await Vue.http.get(`categories?active=true`)
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
  incrementView: async (context, { id }) => {
    let data = await Vue.http.put(`increment-view/${id}`);
    return data.body;
  },
  getPostsRelevant: async () => {
    let data = await Vue.http.get(`posts?_sort=views:DESC&_limit=3`);
    return data.body;
  },
  sendMessage: async (context, body) => {
    let data = await Vue.http.post("messages", body);
    return data.body;
  },
  getSocialNetworks: async () => {
    let data = await Vue.http.get("social-medias")
    return data.body;
  }
}