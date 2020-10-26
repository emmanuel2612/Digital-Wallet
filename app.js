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



}