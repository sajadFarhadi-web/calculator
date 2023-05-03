 let  display =  document.querySelector('#ds')
 let _clear =  document.querySelector('#clear')
 let _cLastAction =  document.querySelector('#cLastAction')
 let _backSpace =  document.querySelector('#backSpace')
 let  _div =  document.querySelector('#div')
let _mul = document.querySelector('#mul')
let _minus = document.querySelector('#minus')
let _plus = document.querySelector('#plus')
let _point = document.querySelector('#point')
let _equls = document.querySelector('#equls')
let _pn = document.querySelector('#pn')
let _Nums = document.querySelectorAll('#number')


let setpoint = false
let num1 , num2, motaghyer
let setMotaghyer =false
 let op = ''

// clear*
 _clear.addEventListener('click', function(event){
    display.textContent='0'
    setpoint = false
    setMotaghyer = false
     num1 = 0 
     num2 = 0
 })
 //_cLastAction
 _cLastAction.addEventListener('click', function(event){
    display.textContent='0'
 })


// **pn/
_pn.addEventListener('click' , function(event){
    display.textContent= display.textContent * -1
})

// *point**
-_point.addEventListener('click' , function(event){
   
    if(setpoint == false){
         display.textContent += '.'
         setpoint=true
    }
})
// **plus/
    _plus.addEventListener('click', function(event){
        num1  = Number(display.textContent)
        display.textContent='0'
        op ='+'
    })
// minus**
    _minus.addEventListener('click', function(event){
        num1  = Number(display.textContent)
        display.textContent='0'
        op ='-'
    })
// div/ **
    _div.addEventListener('click', function(event){
        num1  = Number(display.textContent)
        display.textContent='0'
        op ='/'
    })
// mul**
    _mul.addEventListener('click', function(event){
        num1  = Number(display.textContent)
        display.textContent='0'
        op ='*'
    })
// eqlus**
    _equls.addEventListener('click', function(event){
        if(setMotaghyer == false){
             num2  = Number(display.textContent)
        }else{
            num1  = Number(display.textContent)
        }
       

        switch(op){
            case '+':
                 motaghyer= num1 + num2
            break;
            case '-':
                 motaghyer= num1 - num2
            break;
            case '/':
                 motaghyer= num1 / num2
            break;
            case '*':
                 motaghyer= num1 * num2
            break;
        }
        display.textContent= motaghyer;
        setMotaghyer = true
    })

// **bcSpc*
_backSpace.addEventListener('click', function(event){
    let len = display.textContent.length
    let last = display.textContent.substring(len - 1, len )
    if(last == "."){setpoint =false}
    if(len > 1){
       display.textContent= display.textContent.substring(0 , len -1) 
    } else{
        display.textContent='0'
    }
})
////**** */



// number*
_Nums.forEach((item) => {
    item.addEventListener('click',function(event){
        if(display.textContent == '0'){
             display.textContent =event.target.textContent
        }else{
            display.textContent += event.target.textContent
        }
   

    })
})