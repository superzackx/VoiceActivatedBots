const fs = require("fs");
const commandFiles = fs.readdirSync('../Examples').filter(file => file.endsWith('.js'));

function loadFile(file) {
    for (const file of commandFiles) {
        try {
            const command = require(`../Examples/${file}`); 
            return command; 
        } catch (error) {
            console.error(error);
            return false; 
        }
    }
}

function loadAll() {
    let files = []
    for (const file of commandFiles) {
        const command = require(`../Examples/${file}`); 
        files.append(command); 
    }
    return files; 
}