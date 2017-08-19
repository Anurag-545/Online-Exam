var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var groupSchema=new Schema({
	  userEmail:{type:String,required:true},
	  groupName:{type:String,required:true,unique:true},
		usersEmail:{type:[String],required:true}
});

var Group=mongoose.model('Group',groupSchema);
module.exports=Group;
