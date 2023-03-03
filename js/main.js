
        header_div= document.getElementById('header__nav');


        function testScroll()
        {
            
           if(document.documentElement.scrollTop > 300)
           {
            header_div.style.backgroundColor = "black";
            
            }
           else
           {
            header_div.style.backgroundColor ="transparent";
           }
        }
        

     