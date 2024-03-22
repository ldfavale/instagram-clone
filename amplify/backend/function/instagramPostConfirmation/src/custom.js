/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log("Event", event)
  console.log("Context", context)
  return event;
};
