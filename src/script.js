var tags = new Array();
tags.push(new Array("SDGoals On The Go", "swiftui"));
tags.push(new Array("test", "javascript", "swiftui"))

var isChecked = new Array();
var boolChecked = new Array();

isChecked.push("javascript");
boolChecked.push(false);

isChecked.push("swiftui");
boolChecked.push(false);

isChecked.push("html");
boolChecked.push(false);

isChecked.push("css");
boolChecked.push(false);

function filter(category){
    var check = category.id;
    if(document.getElementById(check).checked){
        boolChecked[isChecked.indexOf(check)] = true;
    }
    else{
        boolChecked[isChecked.indexOf(check)] = false;
    }
    console.log(isChecked);
    console.log(boolChecked);

    if(!allFalse(boolChecked)){
        var includes = new Array(tags.length).fill(0);
        
        for(var i = 0; i < isChecked.length; i++){
            for(var j = 0; j < tags.length; j++){
                if(boolChecked[i]){
                    if(tags[j].includes(isChecked[i])){
                        includes[j]++;
                    }
                }
            }
        }
        console.log(includes);
        for(var i = 0; i < includes.length; i++){
            if(includes[i] != 0){
                document.getElementsByClassName("shadow")[i].style.display = "block";
            }
            else{
                document.getElementsByClassName("shadow")[i].style.display = "none";
            }
        }
    }
    else{
        for(var i = 0; i < tags.length; i++){
            document.getElementsByClassName("shadow")[i].style.display = "block";
        }
    }
}

function allFalse(boolChecked){
    var count = 0;
    for(var i = 0; i < boolChecked.length; i++){
        if(!boolChecked[i]){
            count++;
        }
    }
    if(count == boolChecked.length){
        return true;
    }
    return false;
}