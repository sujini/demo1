import $ from "jquery";
console.log('A');

export const setA = () =>{
    console.log("setA");
   
};

export const getA = () =>{
    console.log("getA");
};
$(function(){
    alert('complete load');
});