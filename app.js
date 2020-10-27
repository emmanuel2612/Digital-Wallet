window.onload = () =>{

   
    const transactionOne = document.getElementById("transaction-1");

    transactionOne.onclick = () => {

        const moreInfo = document.getElementById("more-info-1");

        if (moreInfo.style.display == "block"){
            moreInfo.style.display = "none";
        } else{
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




}