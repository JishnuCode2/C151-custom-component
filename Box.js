
/*AFRAME.registerComponent("move-box",{
    schema:{
        moveX: {type:'number', default: 1}
    },
    tick: function(){
        this.data.moveX = this.data.moveX + 0.01

        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
    }
})*/

AFRAME.registerComponent("rotate-box",{
    schema:{
        rotate : {type:'number', default: 0}
    },

    tick: function(){
        this.data.rotate = this.data.rotate + 5

        var rot = this.el.getAttribute("rotation")
        rot.x = this.data.rotate
        rot.y = this.data.rotate

        this.el.setAttribute("rotation", {x: rot.x, y: rot.y, z:rot.z})
    }
})