const osiris_glr = require("osiris.js");
const client = new osiris_glr("TOKEN");

(async () => {
    const profile = await client.getPersonalia();
    console.log(`Logged in as ${profile.name}`)
})()