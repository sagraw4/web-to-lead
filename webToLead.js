console.log("Web To Lead");
/*const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
document.getElementById('00NKk000001FRNu').value = formattedDate;
console.log("formattedDate", formattedDate);
*/


function beforeSubmit(){

    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log('inputdate.value',inputdate.value );
    let formattedDate = new Date(inputdate.value);
    let utcDateString = formattedDate.toISOString();
    const formattedDateEST = new Date(utcDateString).toLocaleDateString('en-US', {
        timeZone: 'America/New_York', // Replace with the desired time zone
      });  

    console.log("formattedDateEST", formattedDateEST);
    outputdate.value = formattedDateEST;

}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 