function validateInput() {
    $.ajax({
        url: "http://ec2-13-58-11-61.us-east-2.compute.amazonaws.com:4906/",
        dataType: "jsonp", // jsonp
        type: "POST",
        jsonpCallback: 'processJSONPResponse', // add this property
        contentType: "application/json; charset=utf-8",
        success: function (result, status, xhr) {
                let userInput = document.getElementById("code_input").value;
                if(userInput == result.code) {
                    console.log("Input Validated");
                    alert(result.message);
                }
                else {
                    console.log("Error");
                    alert(result.code);
                }
                // console.log(result.message);
                // console.log(result.code);
        },
        error: function (xhr, status, error) {
            console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });
}