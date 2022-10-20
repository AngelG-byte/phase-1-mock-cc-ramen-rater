
const picCon = document.querySelector('#ramen-menu')
const nameHolder = document.querySelector('h2.name')
const form = document.querySelector('form#new-ramen')
const imgHolder = document.querySelector('img#ramen-datail')
const ratHolder = document.querySelector('#rating-display')
const comHolder = document.querySelector('#comment-display')
const restuHolder = document.querySelector('h3.restaurant')
fetch('http://localhost:3000/ramens')
.then (r => r.json())
.then(data => {
    data.forEach(element => {
        const image = document.createElement('img')
        picCon.append(image)
        image.src = element.image
        image.addEventListener( 'click' , () =>{
            const name = document.querySelector('h2')
            const restu = document.querySelector('h3.restaurant')
            const rating = document.querySelector('#rating-display')
            const comment = document.querySelector('#comment-display')
            const image2 =document.querySelector('img.detail-image')
            name.innerHTML = element.name
            restu.innerHTML = element.restaurant
            rating.innerHTML= element.rating
            comment.innerHTML = element.comment
            image2.src = element.image
            
         })
            

            })
            form.addEventListener('submit',(e) =>{
                e.preventDefault()
                
                const newN = document.querySelector('#new-name').value
                const newRe = document.querySelector('#new-restaurant').value
                const newRa = document.querySelector('#new-rating').value
                const newImg = document.querySelector('#new-image').value
                const newCom = document.querySelector('#new-comment').value
                nameHolder.innerHTML= newN
                restuHolder
    });
}
 )
  
  







