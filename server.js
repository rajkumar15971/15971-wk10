var http = require('http')
var url = require('url')

var port = process.env.PORT || Number(process.argv[2]);
var Course_id = {
  cs551: {
    	"cs551": [

        {
        
          "Score": 22,
          "HomeworkID":1
        },
        {
         
          "Score": 33,
          "HomeworkID":1
        },
        {  
          "Score": "44",
          "HomeworkID":200
        }
      ]
  },
  cs557: {
    "cs557": [
      {
      
        "Score": 11,
        "HomeworkID":1
      },
      {
       
        "Score": 4444,
        "HomeworkID":1
      }
    ]
  }
}


function parsetime(cid) {
  return Course_id[cid];
}

var server = http.createServer(function (req, res) {
  var result;
  var parsedUrl = url.parse(req.url, true);

  if (/^\/api\/score/.test(req.url)) {
    var cid = parsedUrl.query.course_id;
    result = parsetime(cid);
  }
    

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(port);
