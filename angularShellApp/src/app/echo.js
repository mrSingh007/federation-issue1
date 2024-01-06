onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (message) => {
   console.log("message",message)
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
