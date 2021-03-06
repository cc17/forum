var domain = require("../domain");
var should = require("should");
var clearDB =require("./util/clearDB");

describe("Reply",function(){

    var Reply = domain._my.Aggres.Reply;
    var reply;

    it("#clearDB",function(done){
        clearDB().then(done);
    });

    it("#new",function(){

        reply = new Reply({
            id:"r001",
            title:"mytitle",
            body:"mybody",
            parentId:"p001",
            topicId:"t001",
            authorId:"a001"
        })

        reply._id.should.eql("r001");
        reply._title.should.eql("mytitle");
        reply._body.should.eql("mybody");
        reply._parentId.should.eql("p001");
        reply._authorId.should.eql("a001");
        reply._topicId.should.eql("t001");

    })
})