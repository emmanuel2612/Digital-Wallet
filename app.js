window.onload = () => {


    /*Global Variables*/

    const date = new Date();

    /* End of global variables */


    const transactionOne = document.getElementById("transaction-1");

    transactionOne.onclick = () => {

        const moreInfo = document.getElementById("more-info-1");

        if (moreInfo.style.display == "block") {
            moreInfo.style.display = "none";
        } else {
            moreInfo.style.display = "block";
        }
    }




    /* Navigation */

    const pageTitle = document.querySelector('.page-title');

    const donatePage = document.querySelector('.donate-page');
    const donatePageButton = document.querySelector('.donate-page-button');

    const walletPage = document.querySelector('.wallet-page');
    const walletPageButton = document.querySelector('.wallet-page-button');

    const hideHeader = () => {
        const header = document.querySelector('#global-header');
        header.style.display = "none";
    }

    const showHeader = () => {
        const header = document.querySelector('#global-header');
        header.style.display = "block";
    }



    const showDonatePage = () => {
        donatePage.style.display = "flex";
        walletPage.style.display = "none";

        pageTitle.innerHTML = "Donate";

        hideHeader();
    }

    donatePageButton.onclick = () => {
        showDonatePage();
    }

    const showWalletPage = () => {
        walletPage.style.display = "flex";
        donatePage.style.display = "none";

        pageTitle.innerHTML = "Wallet";

        showHeader();
    }

    walletPageButton.onclick = () => {
        showWalletPage();
    }




    /* End of Navigation */



    /* Show Notifications */

    const notificationPage = document.querySelector('#notification-container');

    const notificationBell = document.querySelector('#notification-bell');

    const bellCircle = document.querySelector('#bell-circle');

    notificationBell.onclick = () => {
        notificationPage.style.display = "block";

        setTimeout(() => {
            notificationPage.style.transform = "translate(0%)";

            ontransitionend = () => {
                bellCircle.style.display = "none";
            }

        });

    }

    /* Hide Notifications */

    const notificationClose = document.querySelector('#notification-close');

    notificationClose.onclick = () => {
        notificationPage.style.transform = "translate(100%)";

        setTimeout(() => {
            notificationPage.style.display = "none";
        }, 300);

    }

    /* Notification Messages */

    const messageOne = document.querySelector('#message-1');
    const messageTwo = document.querySelector('#message-2');

    messageOne.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet lectus sed libero pretium vestibulum sit amet eu nisi. Sed eget commodo elit. Sed pretium massa urna, vel scelerisque lectus accumsan id. Aliquam fermentum congue massa ut posuere. Vestibulum euismod libero et risus porta lacinia. Sed sed sollicitudin eros. Maecenas sit amet sem dignissim dui blandit lacinia vel sed odio. Aenean egestas purus sit amet odio vulputate, sit amet viverra est vulputate. Morbi at dapibus lectus, sed congue tellus."
    messageTwo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet lectus sed libero pretium vestibulum sit amet eu nisi. Sed eget commodo elit. Sed pretium massa urna, vel scelerisque lectus accumsan id. Aliquam fermentum congue massa ut posuere. Vestibulum euismod libero et risus porta lacinia. Sed sed sollicitudin eros. Maecenas sit amet sem dignissim dui blandit lacinia vel sed odio. Aenean egestas purus sit amet odio vulputate, sit amet viverra est vulputate. Morbi at dapibus lectus, sed congue tellus."

    









    /* Donate Page */

    const donateButton = document.querySelector('#donate-button');

    const donateAlert = document.querySelector('#donation-alert-container');

    donateButton.onclick = () => {

        if (donateButton.innerHTML === "Donate Now") {
            donateButton.innerHTML = "Donated";
            donateButton.style.backgroundColor = "#b1b1b3";

            donateAlert.style.display = "flex";

            setTimeout(() => {
                donateAlert.style.opacity = "1";
            }, 200);

            setTimeout(() => {
                donateAlert.style.opacity = "0";
                ontransitionend = () => {
                    donateAlert.style.display = "none";
                }
            }, 2000);

            addTransaction();

        }

    }

    /* Add Transaction */

    const addTransaction = () => {

        const transactionOne = document.querySelector('#transaction-1');

        var transactionTemplate = document.querySelector('.transaction-template');

        transactionTemplate.content.querySelector('.time').innerHTML = `${date.getHours()}:${date.getMinutes()}`;

        var clone = document.importNode(transactionTemplate.content, true);

        transactionOne.before(clone);

    }








    /* Alerts */

    const twitterAlert = document.querySelector('#twitter-alert-container');

    setTimeout(() => {
        twitterAlert.style.display = "block";
    }, 6000);

    setTimeout(() => {
        twitterAlert.style.transform = 'translateY(0%)';
    }, 7000);

    const twitterAlertTime = document.querySelector('#twitter-alert-time');
    twitterAlertTime.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

    const usernames = ["user1", "user2", "user3", "user4", "user5", "user6", "user7,", "user8", "user9", "user10"];
    let randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
    const twitterAlertMessage = document.querySelector('#twitter-alert-message');
    twitterAlertMessage.innerHTML = `It's ${randomUsername}'s birthday today!`;


    /* Hide Alert */

    const twitterAlertHammer = new Hammer(twitterAlert);


    twitterAlertHammer.on('swipeup', function () {
        twitterAlert.style.transform = 'translateY(-120px)';
    });

    twitterAlertHammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL, velocity: -100 })


    /* Twitter Users */







}






