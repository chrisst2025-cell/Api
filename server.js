require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Protection anti-spam API
const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    message: {
        success: false,
        error: "Too many requests",
        message: "Please try again later"
    }
});

app.use("/api", apiLimiter);


// Fichiers du site
app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// Routes API
const lyricsRoute = require("./routes/lyrics");

app.use("/api/lyrics", lyricsRoute);


// Route principale
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});


// Gestion des erreurs
app.use((err, req, res, next) => {

    console.error("Server Error:", err);

    res.status(500).json({
        success: false,
        error: "Internal server error"
    });

});


// Lancement serveur
app.listen(PORT, () => {

    console.log(`
=================================
 Chris St Lyrics API
 Server running on port ${PORT}
=================================
    `);

});
