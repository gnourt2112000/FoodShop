import { baseUrl } from "../shared/baseUrl";

export const postFeedback = (newFeedback) => (dispatch) => {

    newFeedback.Date = (new Date()).toISOString()
    return fetch(baseUrl + 'feedback',{
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers:{
            "Content-Type": "application/json"
        },
        credentials: 'same-origin'
     })
     .then(response =>{
         if(response.ok){
             return response
         }else {
             var error = new Error('Error ' + response.status+': ' + response.statusText);
             error.response = response;
             throw error;
         }
     },error =>{
         throw error
     })
     .then(response => response.json())
     .then(response =>  alert("Feedback: "+JSON.stringify(response)))
     .catch(error => {console.log('post feedback',error.message); alert('Your feedback could not be posted \n Error: '+error.message);})
}