
export type Desciber <Input, Output, Err> = (input: Input, callback: Callback<Output, Err>) => unknown
export type HasServicePredicate <Output> = (result: null | Output) => boolean
export type Callback <Output, Err> = (err: Err, data: Output) => unknown;

export const DEFAULT_MAX_TRY_TIME = 25 // 25 times
export const DEFAULT_INTERVAL = 20000 // every 20 seconds

/**
 * Wait for some service to be active. 
 * This is a supplemental help for some services which does not natively have a `waitFor` helper.
 * 
 * Example:
 * 
 * ```
 * const dynamodbStreams = new AWS.DynamoDBStreams();

   type I = AWS.DynamoDBStreams.DescribeStreamInput
   type O = AWS.DynamoDBStreams.DescribeStreamOutput
   export type Result = O

   const waitForStream = (input: I): Promise<null | Result> => waitForAWSService<I, O, AWS.AWSError>(
    // Prevent `this` context problem
    (...args) => dynamodbStreams.describeStream(...args), 
    input, 
    data => !!data?.StreamDescription
   )
 * ```
 * 
 * @param describe 
 * @param input 
 * @param hasService 
 * @param maxTryTime 
 * @param interval 
 */
function waitForAWSService <Input, Output, Err> (
    describe: Desciber<Input, Output, Err>,
    input: Input,
    hasService: HasServicePredicate<Output>,
    maxTryTime: number = DEFAULT_MAX_TRY_TIME,
    interval: number = DEFAULT_INTERVAL,
): Promise<null | Output> {
    return new Promise((resolve, reject) => {
        const callback = (err: null | Err, data?: null | Output) => {
            if (err) {
                reject(err)
            } else {
                resolve(data ?? null)
            }
        }

        describeRecur(describe, input, 0, hasService, callback, maxTryTime, interval);
    });
}

export default waitForAWSService


/** Wait for service async */
function describeRecur <Input, Output, Err> (
    describe: Desciber<Input, Output, Err>,
    input: Input,
    retryCounter: number = 0,
    hasService: HasServicePredicate<Output>,
    callback: (err: null | Err, data?: null | Output) => unknown,
    maxTryTime: number,
    interval: number,
) {
    describe(input, (err: Err, data: Output) => {
        if (err || !hasService(data)) {
            // Abort if retry time reaches maximum
            if (retryCounter >= maxTryTime) {
                if (err) {
                    callback(err);
                } else {
                    callback(null);
                }
            } else {
                // Pass resolve as a callback and increment `retryCounter`
                setTimeout(() => {
                    describeRecur(describe, input, retryCounter + 1, hasService, callback, maxTryTime, interval);
                }, interval)
            }
        } else {
            callback(null, data);
        }
    })
}