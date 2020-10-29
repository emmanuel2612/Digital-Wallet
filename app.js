window.onload = () => {


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





    /* Card Transition */

    setTimeout(() => {
        const cardTwo = document.getElementById("card-2");
        const cardThree = document.getElementById("card-3");

        cardTwo.style.transform = 'translateX(0%)';
        cardThree.style.transform = 'translateX(0%)';

    }, 100);


    /* Donate Page */

    const donateButton = document.querySelector('#donate-button');

    const donateAlert = document.querySelector('#donation-alert-container');

    donateButton.onclick = () => {

        if (donateButton.innerHTML === "Donate Now") {
            donateButton.innerHTML = "Donated";

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

        const date = new Date();

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


    /* Hide Alert */

    const twitterAlertHammer = new Hammer(twitterAlert);


    twitterAlertHammer.on('swipeup', function () {
        twitterAlert.style.transform = 'translateY(-120px)';
    });

    twitterAlertHammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL, velocity: -100 })










}






