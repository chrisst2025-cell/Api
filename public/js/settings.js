document.addEventListener("DOMContentLoaded", () => {


    const settingsBtn =
        document.getElementById("settingsBtn");


    const settingsPanel =
        document.getElementById("settingsPanel");


    const closeSettings =
        document.getElementById("closeSettings");


    const changeBg =
        document.getElementById("changeBg");


    const password =
        document.getElementById("adminPassword");


    const backgroundUrl =
        document.getElementById("backgroundUrl");



    const facebookLink =
        document.getElementById("facebookLink");


    const telegramLink =
        document.getElementById("telegramLink");


    const tiktokLink =
        document.getElementById("tiktokLink");





    // Ouvrir paramètres

    settingsBtn.addEventListener(
        "click",
        () => {

            settingsPanel.classList.add(
                "active"
            );

        }
    );





    // Fermer paramètres

    closeSettings.addEventListener(
        "click",
        () => {

            settingsPanel.classList.remove(
                "active"
            );

        }
    );








    // Changer background

    changeBg.addEventListener(
        "click",
        async ()=>{


            const pass =
                password.value.trim();


            const image =
                backgroundUrl.value.trim();




            if(!pass || !image){

                alert(
                    "Remplis tous les champs"
                );

                return;

            }



            try{


                const response =
                    await fetch(
                        "/api/settings/background",
                        {

                            method:"POST",

                            headers:{
                                "Content-Type":
                                "application/json"
                            },


                            body:
                            JSON.stringify({

                                password:
                                pass,


                                image:
                                image

                            })

                        }
                    );



                const data =
                    await response.json();




                if(data.success){


                    alert(
                        "Background modifié"
                    );


                    location.reload();



                }else{


                    alert(
                        data.error
                    );


                }



            }catch(error){


                console.error(
                    error
                );


                alert(
                    "Erreur serveur"
                );


            }


        }
    );







    // Charger réseaux sociaux

    async function loadSocial(){


        try{


            const response =
                await fetch(
                    "/api/settings"
                );


            const data =
                await response.json();



            const social =
                data.settings.social;



            if(social.facebook){

                facebookLink.href =
                    social.facebook;

            }



            if(social.telegram){

                telegramLink.href =
                    social.telegram;

            }



            if(social.tiktok){

                tiktokLink.href =
                    social.tiktok;

            }



        }catch(error){


            console.error(
                "Social loading error:",
                error
            );


        }


    }



    loadSocial();



});
