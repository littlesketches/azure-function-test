module.exports = async function (context, req) {

    // ABOUT THIS AZURE FUNCTION
    // - This Function is setup to provide a JSON data array endpoint. It expands on a basic single dataset response 
    // by providing a simple model for accepting a request body query for 'name', which can be used/correspond to
    // to fetching different datasets (i.e. data array lists and/or arrays of objects). The example uses an array of 
    // objects, with the expected key for a list being the 'name' key.
    // 
    // - Note that the request body is automatically parsed from the query string of the URL request (if there is one)
    // For example:  https://survey-lists-endpoint.azurewebsites.net/api/surveylistsendpoint?name=materials
    //   will sends 'materials' as the 'name' that is accessed from the req.query (see below)



    // 1. Use the request body (query string) to select a "name" of a data list
    const name = (req.query.name || (req.body && req.body.name));       // In the example UTL , this name variable is set to 'materials'

    // 2. Use the list to choose the right data to return
    // In this example, a switch function simply returns hard coded data: in production, response data could be set from an Azure resource.

    let reponseData  = null        //  Global variable to store the response

    switch(name){
        // NOTE: ALL DUMMY DATA RESPONSES:
        case 'materials':
            // Create an array of data for this case. 
            reponseData = [
                {name: 'Material 01',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Material 02',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Material 03',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Material 04',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Material 05',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
            ]
            break 

        case 'regions':
            // Create an array of data for this case. 
            reponseData = [
                {name: 'Region 01',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Region 02',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Region 03',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Region 04',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Region 05',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
            ]
            break 

        case 'synths':
            // Create an array of data for this case. 
            reponseData = [
                {name: 'Synth 01',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Synth 02',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Synth 03',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Synth 04',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'Synth 05',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
            ]
            break 


        case 'lgas':
            // Create an array of data for this case. 
            reponseData = [
                {name: 'LGA name 01',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'LGA name 02',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'LGA name 03',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'LGA name 04',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
                {name: 'LGA name 05',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`},
            ]
            break
        default:
            reponseData = [
                {name: 'No listname was specified',   description: `This doesn't get used; but may be an example of a standard 'array of objects' dataset`}
            ]

    }

    // 3. Set and send the response
    context.res = {
        status:         200, /* Defaults to 200 */
        body:           reponseData
    };


}


