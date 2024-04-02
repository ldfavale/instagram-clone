/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
  const docClient = new AWS.DynamoDB.DocumentClient();

  const env = process.env.ENV;
  const AppSyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
  const TableName = `User-${AppSyncID}-${env}`;
  
  const userExists = async id => {
    const params = {
      TableName,
      Key: { id }
    };

    try{
      const response = await docClient.get(params).promise(); 
      console.log("response?.Item!",response?.Item);
      return !!response?.Item;
    }catch(e){
      console.log("Error! :( ",e);
      return false;
    }
  }

  const saveUser = async user => {
    const date = new Date();
    const dateStr = date.toISOString();
    const timestamp = date.getTime();

    const Item = {
      ...user,
      __typename: 'User',
      createdAt: dateStr,
      updatedAt: dateStr,
      _lastChangedAt: timestamp,
      _version: 1

    }

    const params = {
      TableName,
      Item
    };

    try {
      await docClient.put(params).promise();
    } catch (e) {
      console.log(e);
    }

  }



exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  

  console.log("TableName", TableName)
  console.log("Event", event)
  console.log("Context", context)


  if(!event?.request?.userAttributes){
    console.log("No user data available");
    return;
  }

  const {sub, name, email} = event.request.userAttributes;

  const newUser = {
    id: sub,
    name,
    email
  };

  if(!(await userExists(sub))){
    await saveUser(newUser);
    console.log(`User ${sub} has been saved to the database`)
  }else{
    console.log(`User ${sub} already exists`)
  }
  return event;
};
