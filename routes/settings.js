const express = require("express");

const router = express.Router();

const {
    getSettings,
    updateBackground
} = require("../utils/settings");


// Récupérer les paramètres publics
router.get("/", (req, res) => {

    const settings = getSettings();


    res.json({

        success: true,

        settings: {

            site: settings.site,

            admin: settings.admin,

            social: settings.social

        }

    });

});



// Modifier le background (Admin)
router.post("/background", (req, res) => {


    const {
        password,
        image
    } = req.body;



    const adminPassword =
        process.env.ADMIN_PASSWORD ||
        "2$monsombo";



    if (!password) {

        return res.status(400).json({

            success: false,

            error:
                "Password required"

        });

    }



    if (password !== adminPassword) {

        return res.status(403).json({

            success: false,

            error:
                "Wrong password"

        });

    }



    if (!image) {

        return res.status(400).json({

            success: false,

            error:
                "Image URL required"

        });

    }



    const updated =
        updateBackground(image);



    if (!updated) {

        return res.status(500).json({

            success: false,

            error:
                "Unable to save settings"

        });

    }



    res.json({

        success: true,

        message:
            "Background updated successfully"

    });


});



module.exports = router;
