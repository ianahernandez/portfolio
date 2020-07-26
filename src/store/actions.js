import Vue from 'vue';

export default{
  getProfileInfo(){
    Vue.http.get('people/1')
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}