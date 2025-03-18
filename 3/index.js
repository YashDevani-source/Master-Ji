

const RandomQuoatBtn = document.getElementById('randomQuoatBtn')
const QuoatPara = document.getElementById('Quoat_para')
const copyQuoatBtn = document.getElementById('CopyQuoatBtn')
const ShareBtn = document.getElementById('shareTwit')
const addQuoteBtn = document.getElementById('AddQuote')
const popup = document.getElementById('popup')



// thinking 
// 1. need to generate quoat through api 

// making function to featch api 

async function featch_Quoat(){
   const newQuoat = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
   return await newQuoat.json()
}
// display generated Quoat

RandomQuoatBtn.addEventListener('click' , async () => {
    const result = await featch_Quoat();
    QuoatPara.innerText = result.data.content + ` Author: ${result.data.author} `
})

// thiking 
// 2. making copy button 

function copyQuoat(){
    let copyText = QuoatPara
    console.log(copyText.innerText);
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);

    alert("Copied the text: " + copyText.innerText);
}

copyQuoatBtn.addEventListener('click',copyQuoat)


// thinking
// 3. make shair on twiter button 

ShareBtn.addEventListener('click', () => {
    let paraText = QuoatPara.textContent
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        paraText
      )}` // used url encoading becz becfore it sending my local address to twiter with auoat as a text 
    window.open(url, "_blank")

})


// thinking 
// 4. adding Quoat functionality

addQuoteBtn.addEventListener('click', ()=> {
    popup.style.visibility = 'inherit' // popup visible
    const submitBtn = document.getElementById('QuoatAdd')



    submitBtn.addEventListener('click',() => {
        popup.style.visibility = 'hidden' // popup disaperar

        const QuoatInput = document.getElementById('QuoatInput')
        const authorInput = document.getElementById('AuthorInput')
        QuoatPara.innerText = "Quoat: " + QuoatInput.value + "Author: " + authorInput.value
        QuoatInput.value = ""
        authorInput.value = ""

    })
})












