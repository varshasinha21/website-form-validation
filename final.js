const LOCAL_RECORDS = "LOCAL_RECORDS";
const clearButton = document.getElementById("clearBtn");
const enrollmentForm = document.getElementById("enrollment-form");
const enrollmentRecords = document.getElementById("enrollment-records");

// Function to fetch records
const getStoredRecords = () =>{
    return localStorage.getItem(LOCAL_RECORDS);
}

// Function to store records
const storeRecords = (data) =>{
    const prevRecords = getStoredRecords();
    arr = prevRecords ? JSON.parse(prevRecords) : []
    arr.push(data);
    localStorage.setItem(LOCAL_RECORDS, JSON.stringify(arr));
}

// Function to display record
const showRecords = (data) =>{
    const td1 = enrollmentRecords;
    td1.innerHTML += data;

}

//function to remove all user data
const clearData = () => {
    localStorage.clear();
    window.location.reload();
    clearButton.style.display = 'none';
}
const handleSumbit = (e) => {
       // Preventing from refreshing
       e.preventDefault();
   
       var formInput = form;
       var Name = formInput.Name.value;
       var EMail= formInput.EMail.value;
       var gender= formInput.gender.value;
       var Website = formInput.Website.value;
       var image= formInput.image.value;
       var skills = [];
       if (document.getElementById("java").checked) {
           skills.push("Java")
       }
       if (document.getElementById("html").checked) {
           skills.push("HTML")
       }
       if (document.getElementById("css").checked) {
           skills.push("CSS")
       }
   
       const rec = {Name, EMail, gender, Website, image, skills}
       //Adding new enrollment
       addNewEnrollment(rec);
   
     //  Displaying delete button
    clearButton.style.display = 'block';

       //Resseting the form
       e.target.reset();
   }
   
   // Adding new enrollment data
   const addNewEnrollment = (rec) =>{
       const {Name, EMail, gender, Website, image, skills} = rec;
       newData =
           `
           <tr class="record">
             <td class="border-end">
                   <div>
                       <p class="i-all"><b>${Name}</b></p>
                       <p class="i-all">${EMail}</p>
                       <a class="i-all" target="_blank" href=${Website}>
                           Website
                       </a>
                       <p class="i-all">${gender}</p>
                       <p>${skills.join(", ")}</p>
                   </div>
             </td>
             <td>
                   <div class="d-all n-all">
                       <img
                           src=${image}
                           class="img-fluid d-all n-all border rounded"
                           alt="image"
                       />
                   </div>
               </td>
           </tr>
       `.trim();
   
       // saving data to local storage
       storeRecords(newData);
       // showRecords();
       showRecords(newData);
   }
   
   // Lets display the previous data if present
   const dispStored = () =>{
       clearButton.style.display = 'none';
       let prevRecords = getStoredRecords();
       arr = prevRecords ? JSON.parse(prevRecords) : []
       arr.forEach((rec) => showRecords(rec));
   }
   
   dispStored();
   // showRecords();
   // Function without Local storage implementation
   function foo(){
       console.log("Foo called")
       var x = document.getElementById("stu_form")
       const td = document.getElementById("table-data")
       var name = x.Name.value;
       var email = x.EMail.value;
       var gender = x.gender.value;
       var web = x.Website.value;
       var img = x.img_url.value;
       
       var skill = "";
       if(document.getElementById("java").checked == true)
           {console.log("Java is selected");
           skill+="Java";
           }
       if(document.getElementById("css").checked == true)
           {console.log("css is selected");
           skill+=",CSS";
           }
       
       if(document.getElementById("html").checked == true)
           {console.log("html is selected");
           skill+=",HTML";
           }
       
           td.innerHTML +=
           
           `
           <tr>
           <td scope="col" >
               <b>${name}</b><br>
               ${gender}<br>
               ${email}<br>
               <a href="${web}">Website</a><br>
               ${skill}
           </td>
           <td class="d-flex" style="height: 120px">
           <img class="img w-100 h-100" style="object-fit: contain" src=${img} alt="lol"/></td>
         </tr>
        
           `
       
       document.getElementById("stu_form").reset();
       }