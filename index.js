// This is built in js function
const {hash} = window.location
const message =  atob(hash.replace("#", ""))
if (message) {
    document.querySelector("#message-form").classList.add("hide")
    document.querySelector("#message-show").classList.remove("hide")
    document.querySelector("h1").innerHTML = message
}

// This prevents the default html to send an empty form
document.querySelector("form").addEventListener("submit", ev => {
    ev.preventDefault()

    // Toggling visibility
    document.querySelector("#message-form").classList.add("hide")
    document.querySelector("#link-form").classList.remove("hide")

    const input = document.querySelector("#msg-input")
    // Now we get the user input and convert it to base64 characters
    const encrypt = btoa(input.value)

    // Now we get the encrypted value and implemented into the 2nd input. Also generating a URL
    const linkInput = document.querySelector("#link-input")
    linkInput.value = `${window.location}#${encrypt}`
    linkInput.select()
})