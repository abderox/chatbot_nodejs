const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const  express = require('express');
const app = express();
const bp = require('body-parser');
const req = require('./index');
app.use(bp.urlencoded({
    extended:false
}))
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})

app.post('/send-msg',(req,res)=>{
    runSample(req.body.msgg).then(data=>{
        res.send({reply:data})
    })
})
var checkAndReturn= async (request)=>{
    var str =""+  request;
   
    if(str.includes("SELECT") )
    {
     const v = await req.run(request);
      return v;
    }
    else {
      return "";
    }
    
    
}

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg,projectId = 'oda-fvyf') {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename:"C:/Users/abdel/Desktop/New_folder/oda-fvyf-f7f5a867fce7.json"
  });
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msg,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  console.log(responses);
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentMessages[0].text.text}`);
  const req =  checkAndReturn(result.fulfillmentMessages[0].text.text[0]);
  console.log(req,"kekekek");
  
  result.fulfillmentMessages.map(txt=>{
      console.log(txt.text.text[0]);
  })
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log('  No intent matched.');
  }
 ;
 
    
  req.then(function(result) {
      return result;
   });
let go = await req;
console.log(go);
   return  [result.fulfillmentMessages,go]; 

 
 
}
app.listen(5000,()=>
{
    console.log('runing on port 5000');
})

// int i = 0;
// responses.map(response =>{
//  i++
// if(i<1=0){
//   return resonse;
// }
// })




// @?\rdbms\admin\awrrpt.sql;
