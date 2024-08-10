const defaultUrl="data:image/png;base64,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"
const baseUrlPath="http://localhost:8080";
const loginUrl2="https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp"
const loginUrl1="http://localhost:8080/signIn"
let pageNo=0;
let Login=()=>{
    let url = `${loginUrl1}`;
    let username =document.getElementById("email").value;
    let password =document.getElementById("password").value;

      fetch(url, {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },body: JSON.stringify({
            "login_id": username,
            "password":password
        })
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                localStorage.setItem("jwtToken",JSON.stringify(data.access_token));
                // console.log(data.access_token);
                alert("Successfully loged in.")
                             
                window.location.href="showAllCustomers.html"
            });
        
               
        } else {
            response.json().then(data => alert(data.message));

        }
    })

}
let aLogin=()=>{
    let url = `${loginUrl2}`;
    let username =document.getElementById("aUsername").value;
    let password =document.getElementById("aPass").value;

      fetch(url, {
        method: "POST", 
        headers: {
        },body: JSON.stringify({
            "login_id": username,
            "password":password
        })
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                alert("Successfully loged in.")
                // close("loginModal","close3");
                display(data.access_token);
               
            });
        
               
        } else {
            response.text().then(data => alert(data));

        }
    })

}
let openAddCustomerModal=()=>{
    document.getElementById('Modal').style.display = "block";
    close("Modal","close");
}
let close=(x,y)=>{
    var modal = document.getElementById(`${x}`);
    var span = document.getElementsByClassName(`${y}`)[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

let addCustomer=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let fName=document.getElementById("fName").value
    let lName=document.getElementById("lName").value
    let dob=document.getElementById("dob").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let gender=document.getElementById("gender").value
    let photo=document.getElementById("photo").value
    let state=document.getElementById("state").value
    let add=document.getElementById("add").value
    let city=document.getElementById("city").value
    let street=document.getElementById("street").value

//    console.log(gender)
    fetch(`${baseUrlPath}/admin/register/customer`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "firstName": fName,
            "last_name":lName,
            "photo":photo,
            "dob":dob,
            "email":email,
            "phone":phone,
            "gender":gender,
            "state":state,
            "address":add,
            "city":city,
            "street":street
        })
        
    }).then(response => {
        if(response.status == 201){
            response.text().then(data => {
                alert(data)
                window.location.reload()
            });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="login.html"
        }else{
            response.json().then(data => alert(data.message));
        }
    })

}

let allCustomers=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let sortBy=document.getElementById("sort").value
    let search=document.getElementById("search").value
    let searchBy=document.getElementById("searchBy").value
    let direction=document.getElementById("direction").value

    let url = `${baseUrlPath}/admin/customers/search?direction=${direction}&pageNo=${pageNo+1}&noOfItem=10&sortBy=${sortBy}&search=${search}&serchBy=${searchBy}`;
    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                
                document.querySelector("#list").innerHTML =[];
                let table = document.createElement("table");
                table.className = "student-table";
                
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                
                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Phone";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thGender = document.createElement("th");
                thGender.innerText = "Gender";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thCity = document.createElement("th");
                thCity.innerText = "City";
                let thStreet = document.createElement("th");
                thStreet.innerText = "Street";
                let thState = document.createElement("th");
                thState.innerText = "State";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";
                //thId
                trHead.append(thIndex, thName, thPhoto, thEmail, thMobile, thDOB,thGender, thAddress, thStreet, thCity,thState, thActions);
                thead.append(trHead);
                table.append(thead);
                
                let tbody = document.createElement("tbody");
                
                data.forEach(({firstName,last_name,uuid, dob, address, email,city, street, phone,state,gender, photo}, i) => {
                    let tr = document.createElement("tr");
                    // console.log(data);
                    
                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = firstName+" "+last_name;
                    let tdId = document.createElement("td");
                    tdId.innerText = uuid;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photo || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "user-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = phone;
                    let tdDOB = document.createElement("td");
                    if(dob !=null){
                        tdDOB.innerText = dob[0]+"-"+dob[1]+"-"+dob[2];
                    }
                    
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdGender = document.createElement("td");
                    tdGender.innerText = gender;
                    let tdStreet = document.createElement("td");
                    tdStreet.innerText = street;
                    let tdCity= document.createElement("td");
                    tdCity.innerText = city;
                    let tdState = document.createElement("td");
                    tdState.innerText = state;
                    
                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "remove-btn";
                    removeBtn.addEventListener("click", function(){
                        removebtnfunc(uuid, token);
                    });

                    let editBtn = document.createElement("button");
                    editBtn.innerText = "Edit";
                    editBtn.className = "edit-btn";
                    editBtn.addEventListener("click", function(){
                        openEditCustomerModal(uuid,firstName,last_name,email,phone,city,state,street,gender,photo,address, token);
                    });

                    tdActions.append(removeBtn, editBtn);
                    tr.append(tdIndex, tdName, tdPhoto, tdEmail, tdMobile,tdDOB,tdGender , tdAddress,tdStreet,tdCity,tdState, tdActions);
                    tbody.append(tr);
                });
                
                table.append(tbody);
                document.querySelector("#list").append(table);
            });
        } else if(response.status == 401) {
            alert("Session expired.");
            window.location.href = "Login.html";
        } else {
            response.json().then(data => alert(data.message));
        }
    });
}
let removebtnfunc=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/customers/${userId}`, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
    }
   
        }).then(response => {
            if(response.status == 200){

                response.text().then(data => {
                    alert(data)
                    allCustomers()
                })
                    
                }else if(response.status == 401){
                    alert("Session expired .")
                    window.location.href="login.html"
                }else{
                response.json().then(data => alert(data.message));
            }
        })
    }

}

let openEditCustomerModal=(id,firstName,last_name,email,phone,city,state,street,gender,photo,address, token)=>{
    document.getElementById('updateModal').style.display = "block";
    document.getElementById("id").value=id;
    document.getElementById("fName2").value=firstName;
    document.getElementById("lName2").value=last_name;
    document.getElementById("dob2").value=dob;
    document.getElementById("email2").value=email;
    document.getElementById("phone2").value=phone;
    document.getElementById("gender2").value=gender;
    document.getElementById("photo2").value=photo;
    document.getElementById("state2").value=state;
    document.getElementById("add2").value=address;
    document.getElementById("city2").value=city;
    document.getElementById("street2").value=street;
    close("updateModal","close2");
}

let updateCustomer=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let id=document.getElementById("id").value
    let fName=document.getElementById("fName2").value
    let lName=document.getElementById("lName2").value
    let dob=document.getElementById("dob2").value
    let email=document.getElementById("email2").value
    let phone=document.getElementById("phone2").value
    let gender=document.getElementById("gender2").value
    let photo=document.getElementById("photo2").value
    let state=document.getElementById("state2").value
    let add=document.getElementById("add2").value
    let city=document.getElementById("city2").value
    let street=document.getElementById("street2").value
    fetch(`${baseUrlPath}/admin/customer/update`, {

        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "uuid":id,
            "first_name": fName,
            "last_name":lName,
            "photo":photo,
            "dob":dob,
            "email":email,
            "phone":phone,
            "gender":gender,
            "state":state,
            "address":add,
            "city":city,
            "street":street
            
        })
        
    }).then(response => {
        if(response.status == 200){
            response.text().then(data => {
                alert(data)
                window.location.reload();
            })
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            // window.location.reload()
        }
    })
}

let display=(token)=>{
    close("loginModal","close3");
    let url =`${baseUrlPath}/admin/customer/list?token=${token}`
    let token2 = JSON.parse(localStorage.getItem("jwtToken"));

    fetch(url, {
        method: "GET",   
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token2}`,
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                // console.log(data);
                
                document.querySelector("#list").innerHTML =[];
                let table = document.createElement("table");
                table.className = "student-table";
                
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                
                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Phone";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thCity = document.createElement("th");
                thCity.innerText = "City";
                let thStreet = document.createElement("th");
                thStreet.innerText = "Street";
                let thState = document.createElement("th");
                thState.innerText = "State";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";
                
                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thAddress, thStreet, thCity,thState, thActions);
                thead.append(trHead);
                table.append(thead);
                
                let tbody = document.createElement("tbody");
                
                data.forEach(({first_name,last_name,uuid, address, email,city, street, phone,state,photo}, i) => {
                    let tr = document.createElement("tr");
                    
                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = first_name+" "+last_name;
                    let tdId = document.createElement("td");
                    tdId.innerText = uuid;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photo || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "user-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = phone;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdStreet = document.createElement("td");
                    tdStreet.innerText = street;
                    let tdCity= document.createElement("td");
                    tdCity.innerText = city;
                    let tdState = document.createElement("td");
                    tdState.innerText = state;
                    
                    let tdActions = document.createElement("td");
                    let addBtn = document.createElement("button");
                    addBtn.innerText = "Add";
                    addBtn.className = "edit-btn";
                    addBtn.addEventListener("click", function(){
                        addCustomerFromList(data[i], token2);
                    });

                    tdActions.append(addBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile , tdAddress,tdStreet,tdCity,tdState, tdActions);
                    tbody.append(tr);
                });
                
                table.append(tbody);
                document.querySelector("#list").append(table);
            });
        } else if(response.status == 401) {
            alert("Session expired.");
        } else {
            response.text().then(data => alert(data));
        }
    });
    
}
let openAddLoginModal=()=>{
    document.getElementById('loginModal').style.display = "block";
    close("loginModal","close3");
}
let addCustomerFromList=(data,token)=>{
    // console.log(data);
    fetch(`${baseUrlPath}/admin/register/customer`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "uuid":data.uuid,
            "firstName": data.first_name,
            "last_name":data.last_name,
            "photo":data.photo,
            "dob":data.dob,
            "email":data.email,
            "phone":data.phone,
            "gender":data.gender,
            "state":data.state,
            "address":data.address,
            "city":data.city,
            "street":data.street
        })
        
    }).then(response => {
        if(response.status == 201){
            response.text().then(data => {
                alert(data)
                // window.location.reload()
            });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="login.html"
        }else{
            response.json().then(data => alert(data.message));
        }
    })
    
}
let nextFun=()=>{
    pageNo++
    allCustomers()
}
let prevFun=()=>{
    if(pageNo>0){
        pageNo--
        allCustomers()
    }

}