// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
      //data
    },
    init: function () {
        console.log(this.data.message);
        // to do something when the component is first attached.
      },

      update : function(){
        // do something when the component's data is updated.
      },

      remove :function(){
        // do something when the component or its entity is detached
      },

      tick : function(){
        // do something at every frame or tick
      }
  });

