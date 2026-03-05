const core = require('@actions/core');

try{
    //Input
    const name = core.getInput('name');

    const greeting = `Hello, ${name}`; 

    console.log(greeting);

    core.setOutput('greeting', greeting);
}catch(error){
    core.setFailed(error.message);
}