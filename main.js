var name_of_the_student_array=[];
function submit () {
    var display_student_array=[];
    for(var j=1;j<=4;j++) {
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value ;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    var length_name=name_of_the_student_array.length;
    console.log (length_name);
for(var k=0; k<length_name;k++){
    display_student_array.push("<h4> name-"+ name_of_the_student_array[k]+"</h4>");
    console.log (display_student_array);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log (name_of_the_student_array);
   var display_sorting=[];
   var length_name=name_of_the_student_array.length;
   console.log (length_name);
   for(var k=0; k<length_name;k++){
    display_sorting.push("<h4> name-"+ name_of_the_student_array[k]+"</h4>");
    console.log (display_sorting);

}
var remove_commas=display_sorting.join("");
console.log(remove_commas);

document.getElementById("display_name_without_commas").innerHTML=remove_commas;


}
function update() {
     document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array +"</h1>"; 
}