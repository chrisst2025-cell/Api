const express = require("express");
const axios = require("axios");

const router = express.Router();


// Recherche des paroles
async function searchLyrics(song) {

    const response = await axios.get(
        "https://lrclib.net/api/search",
        {
            params: {
                q: song
            },
            headers: {
                referer: "https://lrclib.net/",
                "user-agent":
                    "Mozilla/5.0 (Lyrics API Chris St)"
            },
            timeout: 10000
        }
    );


    const data = response.data;


    if (!data || !data[0]) {
        return null;
    }


    const track = data[0];


    let lyrics = track.plainLyrics;


    if (!lyrics && track.syncedLyrics) {
        lyrics = track.syncedLyrics
            .replace(/\[.*?\]/g, "")
            .trim();
    }


    return {

        song:
            track.trackName ||
            "Unknown",

        artist:
            track.artistName ||
            "Unknown",

        album:
            track.albumName ||
            "Unknown",

        duration:
            track.duration
                ? `${Math.floor(track.duration / 60)}:${String(Math.floor(track.duration % 60)).padStart(2, "0")}`
                : "Unknown",

        lyrics:
            lyrics ||
            "No lyrics available",

        synced:
            track.syncedLyrics ||
            null,

        provider:
            "lrclib"

    };

}


// GET
router.get("/", async (req, res) => {

    try {

        const song =
            req.query.song;


        if (!song) {

            return res.status(400).json({

                success: false,

                error:
                    "Song parameter is required"

            });

        }


        const result =
            await searchLyrics(song);


        if (!result) {

            return res.status(404).json({

                success: false,

                error:
                    "No lyrics found",

                query:
                    song

            });

        }


        res.json({

            success: true,

            data:
                result,

            query:
                song

        });


    } catch (error) {

        console.error(
            "Lyrics Error:",
            error.message
        );


        res.status(500).json({

            success: false,

            error:
                "Lyrics search failed",

            message:
                error.message

        });

    }

});


// POST
router.post("/", async (req, res) => {

    try {

        const song =
            req.body.song;


        if (!song) {

            return res.status(400).json({

                success: false,

                error:
                    "Song is required"

            });

        }


        const result =
            await searchLyrics(song);


        if (!result) {

            return res.status(404).json({

                success: false,

                error:
                    "No lyrics found"

            });

        }


        res.json({

            success: true,

            data:
                result,

            query:
                song

        });


    } catch (error) {

        console.error(
            error.message
        );


        res.status(500).json({

            success: false,

            error:
                "Server error"

        });

    }

});


module.exports = router;
