class ShowMenu {

    static show(){
        const list = document.getElementById("header-section")!
        const showBtn = document.getElementById("checkbox-menu")!

        console.log(showBtn.checkVisibility())
        
        showBtn.addEventListener("click", () => {
            if (showBtn.checkVisibility() == false){

                list.classList.remove("listAppear")
                list.classList.add("listDesappear")
            }

            else if(showBtn.checkVisibility() == true){

                list.classList.add("listAppear")
                list.classList.remove("hidden")
                list.classList.remove("listDesappear")

            }

        })
    }
}

export default ShowMenu