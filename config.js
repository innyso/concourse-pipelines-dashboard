var config = {}
config.concourse_url = "https://ci.concourse.ci"; //Replace with your concourse url
config.api_subdirectory = "/api/v1";
config.concourse_username = "YOUR_CONCOURSE_USERNAME_HERE";
config.concourse_password = "YOUR_CONCOURSE_PASSWORD_HERE";
config.concourse_team="YOUR_CONCOURSE_TEAM_HERE"
config.use_bearer_token=false


module.exports = config;
