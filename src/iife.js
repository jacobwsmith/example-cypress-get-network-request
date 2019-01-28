;(function() {
  // Some complex conditional logic has been removed for demo purposes :)

  // NOTE: This is the code we are looking to verify is requested in our e2e test
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.src = 'http://127.0.0.1:4201/request.js'
  document.body.insertBefore(script, document.body.firstChild)
})()
