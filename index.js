const core = require('@actions/core');

try {
  // Get input from workflow
  const name = core.getInput('name');

  // Generate greeting
  const greeting = `Hello, ${name}!`;

  console.log(greeting);

  // Set output for future steps
  core.setOutput('greeting', greeting);

} catch (error) {
  core.setFailed(error.message);
}