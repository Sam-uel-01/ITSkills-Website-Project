(()=>{
    let accordion_button = document.querySelectorAll("i");
    accordion_button.forEach((x)=> {
        x.addEventListener('click',()=>{
            let drop_undrop =document.querySelector(".solution_one_container_2");
            let drop_undrop1 =document.querySelector(".solution_one_container_21");
            let drop_undrop2 =document.querySelector(".solution_one_container_22");
            let drop_undrop3 =document.querySelector(".solution_one_container_23");
           
                        
            if(x.classList.contains("greater_than1")){
                
                drop_undrop.classList.remove("hide");
                document.querySelector(".greater_than1").style.display="none"
                document.querySelector(".down_arrow").style.display="block"
                
            }
            if(x.classList.contains("down_arrow")){
                //let drop_undrop2 =document.querySelector(".solution_one_container_2");
                drop_undrop.classList.add("hide");
                document.querySelector(".greater_than1").style.display="block"
                document.querySelector(".down_arrow").style.display="none"
            }

            if(x.classList.contains("greater_than2") ){
                
                drop_undrop1.classList.remove("hide");
                document.querySelector(".greater_than2").style.display="none"
                document.querySelector(".down_arrow2").style.display="block"
            }
            if(x.classList.contains("down_arrow2") ){
                //let drop_undrop2 =document.querySelector(".solution_one_container_2");
                drop_undrop1.classList.add("hide");
                document.querySelector(".greater_than2").style.display="block"
                document.querySelector(".down_arrow2").style.display="none"
            }

            if(x.classList.contains("greater_than3") ){
                
                drop_undrop2.classList.remove("hide");
                document.querySelector(".greater_than3").style.display="none"
                document.querySelector(".down_arrow3").style.display="block"
            }
            if(x.classList.contains("down_arrow3")){
                //let drop_undrop2 =document.querySelector(".solution_one_container_2");
                drop_undrop2.classList.add("hide");
                document.querySelector(".greater_than3").style.display="block"
                document.querySelector(".down_arrow3").style.display="none"
            }



            if(x.classList.contains("greater_than4") ){
                
                drop_undrop3.classList.remove("hide");
                document.querySelector(".greater_than4").style.display="none"
                document.querySelector(".down_arrow4").style.display="block"
            }
            if(x.classList.contains("down_arrow4") && drop_undrop2 ){
                //let drop_undrop2 =document.querySelector(".solution_one_container_2");
                drop_undrop3.classList.add("hide");
                document.querySelector(".greater_than4").style.display="block"
                document.querySelector(".down_arrow4").style.display="none"
            }

            
        })
    });

}
)()