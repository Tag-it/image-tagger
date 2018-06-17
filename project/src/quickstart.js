const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const request = require('superagent');

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = __dirname + 'credentials.json';

function getAuth(cb){

  // Load client secrets from a local file.
  const filepath = __dirname + '/client_secret.json';
  console.log('filepath', filepath);
  fs.readFile(filepath, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles);
  });
  
  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
      
      // Check if we have previously stored a token.
      fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client).then(data =>{
          console.log('data from authorize:', data)
          return cb(data)
        });
      });
    }
    
    /**
     * Get and store new token after prompting for user authorization, and then
     * execute the given callback with the authorized OAuth2 client.
     * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
     * @param {getEventsCallback} callback The callback for the authorized client.
     */
    function getAccessToken(oAuth2Client, callback) {
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
      });
      console.log('Authorize this app by visiting this url:', authUrl);
      request.get(authUrl)
      .then(data => console.log(data))
      .then(data => {

        // const rl = readline.createInterface({
          //   input: process.stdin,
          //   output: process.stdout,
          // });
          // rl.question('Enter the code from that page here: ', (code) => {
            //   rl.close();
            oAuth2Client.getToken(code, (err, token) => {
              if (err) {
                console.log('error ', err.message)
                return callback(err)};
                oAuth2Client.setCredentials(token);
                // Store the token to disk for later program executions
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                  if (err) console.error(err);
                  console.log('Token stored to', TOKEN_PATH);
                });
                callback(oAuth2Client);
              })
        });
    }
    
    /**
     * Lists the names and IDs of up to 10 files.
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    function listFiles(auth) {
      return new Promise((resolve, reject) => {
        const drive = google.drive({version: 'v3', auth});
        drive.files.list({
          //pageSize: 10,
          fields: 'nextPageToken, files(id, name)',
        }, (err, res) => {
          if (err) {
            reject(err);
            return console.log('The API returned an error: ' + err);
          }
          const files = res.data.files;
          if (files.length) {
            console.log('Files:');
            files.map((file) => {
              console.log(`${file.name} (${file.id})`);
              console.log(file);
            });
          } else {
            console.log('No files found.');
          }
          resolve(files);
        });
      });
    }
  }
  getAuth();  // Uncomment to reset OAuth
module.exports = getAuth;