/*
    (c) 2017-2021 BeldrProductions
    bpMain-js Vanilla Javascript Libary
    Version 2.0.2
    Visit http://bpmainjs.beldrproductions.epizy.com
    for more info about the script and functions.

    View the copyright here:
    http://beldrproductions.epizy.com/copyright

    This code is published under the following licence:
    GNU General Public License 3.0
*/

console.log("bpMain-js v2.0.2 running");
console.log("(c) 2017-2020 BeldrProductions inc.");
console.log("More info about the functions here: http://bpmainjs.beldrproductions.epizy.com/docs.html");

function bpHide(id){
    var bpId = id;
    if (bpId == "" || bpId == undefined || bpId == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add a input argument('s) when calling the function");
        return false;
    }else{
        document.getElementById(bpId).style.display = "none";
        return true;
    }
}
function bpShow(id){
    var bpId = id;
    if (bpId == "" || bpId == undefined || bpId == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add a input argument('s) when calling the function");
        return false;
    }else{
        document.getElementById(bpId).style.display = "block";
        return true;
    }
}
function bpValueChange(id, text){
    var bpId = id;
    var bpNewText = text;
    var bpOldText = document.getElementById(bpId).innerHTML;
    if (bpId == "" || bpId == undefined || bpId == null || bpNewText == "" || bpNewText == undefined || bpNewText == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input argument('s) when calling the function");
        return false;
    }else{
        document.getElementById(bpId).innerHTML = bpNewText;
        return true;
    }
}
function bpLog(text){
    var bpLogText = text;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (bpLogText == "" || bpLogText == undefined || bpLogText == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input argument('s) when calling the function");
        return false;
    }else{
        console.log("BPLOG [" + time + "] - " + bpLogText);
        return true;
    }
}     
function bpReload(){
    var bpUrl = document.location.href;
    location.reload();
}     
function bpOpenUrl(url, target){
    var bpUrl = url;
    var bpTarget = target;
    if (bpUrl == "" || bpUrl == undefined || bpUrl == null || bpTarget == "" || bpTarget == undefined || bpTarget == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input argument('s) when calling the function");
        return false;
    }else{
        if (bpTarget == 'self' || bpTarget == 'SELF'){
            document.location.href = bpUrl;
            return true;
        }else if (bpTarget == 'new' || bpTarget == 'NEW'){
            window.open(bpUrl);
            return true;
        }
    }
}     
function bpAlert(alerttext){
    var bpAlertText = alerttext;
    if (bpAlertText == "" || bpAlertText == undefined || bpAlertText == null){
        alert();
        return true;
    }else{
        alert(alerttext);
        return true;
    }
}
class AssertionError extends Error {name = "AssertionError"}
const assert = (statement = true,message) =>{
if(!statement) throw new AssertionError(message || statement + " == true")
}
function bpGetParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function bpSaveLocalStorage(name, value){
    let bpStorageName = name;
    let bpStorageValue = value;
    if (bpStorageName == undefined || bpStorageName == "" || bpStorageName == null || bpStorageValue == undefined || bpStorageValue == "" || bpStorageValue == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input argument('s) when calling the function!");
        return false;
    }else{
            localStorage.setItem(bpStorageName, bpStorageValue);
            return true;
    }
}
function bpLoadLocalStorage(name){
    let bpStorageName = name;
    if (bpStorageName == undefined || bpStorageName == "" || bpStorageName == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input argument('s) when calling the function!");
        return false;
    }else{
            let bpStorageValue = localStorage.getItem(bpStorageName);
            return bpStorageValue;
    }
}
function bpRemoveLocalStorage(name){
    let bpStorageName = name;
    if (bpStorageName == undefined || bpStorageName == "" || bpStorageName == null){
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input argument('s) when calling the function!");
        return false;
    }else{
            localStorage.removeItem(bpStorageName);
            return true;
    }
}
function bpClearLocalStorage(){
            localStorage.clear();
            return true;
}
function bpGetValue(id){
    var bpId = id;
    if (bpId){
        let bpValue = document.getElementById(bpId).value;
        return bpValue;
    }else{
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input arguments when calling the function!");
        return false;
    }
}
function bpGetFocus(id){
    var bpId = id;
    if (bpId){
        document.getElementById(bpId).focus;
        return true;
    }else{
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input arguments when calling the function!");
        return false;
    }
}
function bpSleep(milliseconds){
    if (milliseconds){
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }else{
        console.error("bpMain-js ERROR | No input argument('s) found. Please add input arguments when calling the function!");
        return false;
    }
}
