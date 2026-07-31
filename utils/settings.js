const fs = require("fs");
const path = require("path");

const settingsPath = path.join(
    __dirname,
    "..",
    "data",
    "settings.json"
);


// Lire les paramètres
function getSettings() {

    try {

        const file = fs.readFileSync(
            settingsPath,
            "utf8"
        );

        return JSON.parse(file);

    } catch (error) {

        console.error(
            "Settings read error:",
            error.message
        );


        return {};

    }

}


// Sauvegarder les paramètres
function saveSettings(settings) {

    try {

        fs.writeFileSync(
            settingsPath,
            JSON.stringify(
                settings,
                null,
                2
            ),
            "utf8"
        );


        return true;


    } catch (error) {

        console.error(
            "Settings save error:",
            error.message
        );


        return false;

    }

}


// Modifier uniquement le background
function updateBackground(imageUrl) {

    const settings =
        getSettings();


    if (!settings.site) {
        settings.site = {};
    }


    if (!settings.site.background) {
        settings.site.background = {};
    }


    settings.site.background.enabled =
        true;


    settings.site.background.image =
        imageUrl;


    return saveSettings(settings);

}


module.exports = {

    getSettings,

    saveSettings,

    updateBackground

};
