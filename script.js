const api ="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"
const inp = document.getElementById('inp')
const images = document.querySelector('images')
const getImage = async () => {
    // make a request to openia api
    const methods = {
        method:"POST",
        Headers,{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.ariaValueMax,
                "n":3,
                "size":"256x256"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/edits", methods)
    // parse the response as json 
    const data = await res.json()
    const listImages = data.data;
    images.innerHTML =""
    listImages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
    listImages.map(photo => {
        img.src = .url
    })
}