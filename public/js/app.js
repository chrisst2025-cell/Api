document.addEventListener("DOMContentLoaded", () => {


    const adminAvatar = document.getElementById("adminAvatar");
    const adminName = document.getElementById("adminName");
    const adminRole = document.getElementById("adminRole");


    const backgroundLayer = document.getElementById("background-layer");


    const searchBtn = document.getElementById("searchBtn");
    const songInput = document.getElementById("songInput");


    const resultContainer = document.getElementById("resultContainer");

    const cover = document.getElementById("cover");
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");
    const album = document.getElementById("album");
    const lyrics = document.getElementById("lyrics");


    const audioPlayer = document.getElementById("audioPlayer");


    const playBtn = document.getElementById("playBtn");
    const copyBtn = document.getElementById("copyBtn");
    const downloadBtn = document.getElementById("downloadBtn");



    let currentPreview = "";



    // Charger profil administrateur

    async function loadAdmin() {

        try {

            const response = await fetch("/data/admin.json");

            const admin = await response.json();


            adminAvatar.src = admin.avatar;

            adminName.textContent = admin.name;

            adminRole.innerHTML =
                `<i class="fa-solid fa-crown"></i> ${admin.role}`;


        } catch(error) {

            console.error(
                "Admin loading error:",
                error
            );

        }

    }





    // Charger paramètres

    async function loadSettings() {

        try {

            const response =
                await fetch("/api/settings");


            const data =
                await response.json();



            const bg =
                data.settings.site.background.image;



            if(bg){

                backgroundLayer.style.backgroundImage =
                    `url(${bg})`;

            }



        } catch(error){

            console.error(
                "Settings error:",
                error
            );

        }

    }







    // Recherche musique

    async function searchLyrics(){


        const query =
            songInput.value.trim();



        if(!query){

            alert(
                "Entre un titre ou un artiste"
            );

            return;

        }



        searchBtn.disabled = true;

        searchBtn.textContent =
            "Recherche...";



        try{


            const response =
                await fetch(
                    `/api/lyrics?song=${encodeURIComponent(query)}`
                );



            const data =
                await response.json();



            if(!data.success){

                alert(
                    data.error ||
                    "Aucun résultat"
                );

                return;

            }




            const song =
                data.data;



            title.textContent =
                song.song;



            artist.textContent =
                song.artist;



            album.textContent =
                song.album;



            lyrics.textContent =
                song.lyrics;



            resultContainer.classList.remove(
                "hidden"
            );



            if(song.image){

                cover.src =
                    song.image;

            }



            if(song.preview){

                currentPreview =
                    song.preview;

                audioPlayer.src =
                    song.preview;

            }else{

                audioPlayer.removeAttribute(
                    "src"
                );

            }



        }catch(error){

            console.error(
                error
            );

            alert(
                "Erreur serveur"
            );


        }finally{


            searchBtn.disabled =
                false;


            searchBtn.innerHTML =
                `<i class="fa-solid fa-magnifying-glass"></i> Chercher`;

        }


    }







    // Lecture audio

    playBtn.addEventListener(
        "click",
        ()=>{


            if(!currentPreview){

                alert(
                    "Aucun aperçu audio disponible"
                );

                return;

            }



            if(audioPlayer.paused){

                audioPlayer.play();

            }else{

                audioPlayer.pause();

            }


        }
    );






    // Copier paroles

    copyBtn.addEventListener(
        "click",
        ()=>{


            navigator.clipboard.writeText(
                lyrics.textContent
            );


            alert(
                "Paroles copiées"
            );


        }
    );






    // Télécharger

    downloadBtn.addEventListener(
        "click",
        ()=>{


            if(!currentPreview){

                alert(
                    "Téléchargement indisponible"
                );

                return;

            }


            window.open(
                currentPreview,
                "_blank"
            );


        }
    );






    searchBtn.addEventListener(
        "click",
        searchLyrics
    );



    songInput.addEventListener(
        "keydown",
        (e)=>{

            if(e.key === "Enter"){

                searchLyrics();

            }

        }
    );



    loadAdmin();

    loadSettings();



});
