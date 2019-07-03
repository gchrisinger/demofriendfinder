var express = require('express');
var app = express ();

var PORT = process.env.PORT || 3000;

app. get('/',function(req,res){
    res.send('fu')
})
app.listen(PORT, function() {
    console.log("app listening on port" + PORT);
})

