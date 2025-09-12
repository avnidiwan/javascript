{
    let btn = document.querySelector("button")
    let body = document.querySelector("body")

    // {
    // btn.onClick=function(){
    //     console.log("Hello!")
    //     body.style.backgroundColor="lightblue"
    // }
    // }

    // btn.addEventListener("click", function () {
    //     body.style.backgroundColor = "lightpink"
    // })
}

{
    // let inp = document.querySelector("input")
    // let body = document.querySelector("body")
    // let para=document.querySelector("p")
    // inp.addEventListener("input", (e) => {
    //     console.log(e.target.value)
    //     para.innerText=e.target.value
    // })
}

{
     let form = document.querySelector("form")
     form.addEventListener("submit", (e)=>{
        e.preventDefault()
        console.log(form[0].value)
        console.log(form[1].value)
        console.log(form[2].value)
     })
}

{
    //LOCAL STORAGE
    let form=document.querySelector("form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let obj={
            name:form[0].value,
            email:form[1].value,
            password:form[2].value
        }
        console.log(obj)
        localStorage.setItem("user",JSON.stringify(obj))
    })
    form.addEventListener("reset",(e)=>{
        localStorage.removeItem("user")
    })
}