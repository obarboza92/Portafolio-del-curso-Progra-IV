const form = document.querySelector('#dataForm')
form.addEventListener('submit', save)

const removeButton = document.querySelector('#remove')
removeButton.addEventListener('click',remove)

// Name 
const txtFirstName = document.querySelector('#txtPerFirstName')
const txtLastName = document.querySelector('#txtPerLastName')
const txtEmail = document.querySelector('#txtPerEmail')
const txtPhone = document.querySelector('#txtPerPhone')

//Work
const txtJobName = document.querySelector('#txtJobName')
const txtWorkStartDate = document.querySelector('#txtJobStart')
const txtWorkEndDate = document.querySelector('#txtJobEnd')
const txtJobPosition = document.querySelector('#txtJobPosition')

//Education
const txtEduName = document.querySelector('#txtEduName')
const txtEduStart = document.querySelector('#txtEduStart')
const txtEduEnd = document.querySelector('#txtEduEnd')
const txtEduTitle = document.querySelector('#txtEduTitle')

//Skills
const txtSkill1 = document.querySelector('#txtSkill1')
const txtSkill2 = document.querySelector('#txtSkill2')
const txtSkill3 = document.querySelector('#txtSkill3')
const txtSkill4 = document.querySelector('#txtSkill4')

function remove(e){
    localStorage.removeItem("FirstName")
    localStorage.removeItem("LastName")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    localStorage.removeItem("jobName")
    localStorage.removeItem("jobStart")
    localStorage.removeItem("jobEnd")
    localStorage.removeItem("jobPosition")
    localStorage.removeItem("eduName")
    localStorage.removeItem("eduStart")
    localStorage.removeItem("eduEnd")
    localStorage.removeItem("eduTitle")
    localStorage.removeItem("skill1")
    localStorage.removeItem("skill2")
    localStorage.removeItem("skill3")
    localStorage.removeItem("skill4")
    txtFirstName.value = ""
    txtLastName.value = ""
    txtEmail.value = ""
    txtPhone.value = ""
    txtJobName.value = ""
    txtWorkStartDate.value = ""
    txtWorkEndDate.value = ""
    txtJobPosition.value = ""
    txtEduName.value = ""
    txtEduStart.value = ""
    txtEduEnd.value = ""
    txtEduTitle.value = ""
    txtSkill1.value = ""
    txtSkill2.value = ""
    txtSkill3.value = ""
    txtSkill4.value = ""
}

if(localStorage.getItem("FirstName") != null){
    txtFirstName.value = localStorage.getItem("FirstName")
}
if(localStorage.getItem("LastName") != null){
    txtLastName.value = localStorage.getItem("LastName")
}
if(localStorage.getItem("email") != null){
    txtEmail.value = localStorage.getItem("email")
}
if(localStorage.getItem("phone") != null){
    txtPhone.value = localStorage.getItem("phone")
}
if(localStorage.getItem("jobName") != null){
    txtJobName.value = localStorage.getItem("jobName")
}
if(localStorage.getItem("jobStart") != null){
    txtWorkStartDate.value = localStorage.getItem("jobStart")
}
if(localStorage.getItem("jobEnd") != null){
    txtWorkEndDate.value = localStorage.getItem("jobEnd")
}
if(localStorage.getItem("jobPosition") != null){
    txtJobPosition.value = localStorage.getItem("jobPosition")
}
if(localStorage.getItem("eduName") != null){
    txtEduName.value = localStorage.getItem("eduName")
}
if(localStorage.getItem("eduStart") != null){
    txtEduStart.value = localStorage.getItem("eduStart")
}
if(localStorage.getItem("eduEnd") != null){
    txtEduEnd.value = localStorage.getItem("eduEnd")
}
if(localStorage.getItem("eduTitle") != null){
    txtEduTitle.value = localStorage.getItem("eduTitle")
}
if(localStorage.getItem("skill1") != null){
    txtSkill1.value = localStorage.getItem("skill1")
}
if(localStorage.getItem("skill2") != null){
    txtSkill2.value = localStorage.getItem("skill2")
}
if(localStorage.getItem("skill3") != null){
    txtSkill3.value = localStorage.getItem("skill3")
}
if(localStorage.getItem("skill4") != null){
    txtSkill4.value = localStorage.getItem("skill4")
}

function save(e){
    var firstName = txtFirstName.value
    var lastName = txtLastName.value
    var email = txtEmail.value
    var phone = txtPhone.value
    var jobName = txtJobName.value
    var jobStart = txtWorkStartDate.value
    var jobEnd = txtWorkEndDate.value
    var jobPosition = txtJobPosition.value
    var eduName = txtEduName.value
    var eduStart = txtEduStart.value
    var eduEnd = txtEduEnd.value 
    var eduTitle = txtEduTitle.value
    var skill1 = txtSkill1.value
    var skill2 = txtSkill2.value
    var skill3 = txtSkill3.value
    var skill4 = txtSkill4.value
    localStorage.setItem("FirstName",firstName)
    localStorage.setItem("LastName",lastName)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    localStorage.setItem("jobName",jobName)
    localStorage.setItem("jobStart",jobStart)
    localStorage.setItem("jobEnd",jobEnd)
    localStorage.setItem("jobPosition",jobPosition)
    localStorage.setItem("eduName",eduName)
    localStorage.setItem("eduStart",eduStart)
    localStorage.setItem("eduEnd",eduEnd)
    localStorage.setItem("eduTitle",eduTitle)
    localStorage.setItem("skill1",skill1)
    localStorage.setItem("skill2",skill2)
    localStorage.setItem("skill3",skill3)
    localStorage.setItem("skill4",skill4)
}