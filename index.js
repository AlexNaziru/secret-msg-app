// This prevents the default html to send an empty form
document.querySelector("form").addEventListener("submit", ev => {
    ev.preventDefault()

    const input = document.querySelector("#msg-input")
    // Now we get the user input and convert it to base64 characters
    const encrypt = btoa(input.value)

    // Now we get the encrypted value and implemented into the 2nd input. Also generating a URL
    const linkInput = document.querySelector("#link-input")
    linkInput.value = `${window.location}#${encrypt}`
    linkInput.select()
})