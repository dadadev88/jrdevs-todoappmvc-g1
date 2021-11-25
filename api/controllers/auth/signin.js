module.exports = {


  friendlyName: 'Signin',


  description: 'Signin auth.',


  inputs: {

  },


  exits: {
    success:{
      responseType:'view',
      viewTemplatePath:'pages/auth/signin',
    }
  },


  fn: async function (inputs) {

    // All done.
    return {
      user:"test"
    };

  }


};
