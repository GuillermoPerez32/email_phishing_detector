export const uploadEmail = async (file:any) => {
    let headersList = {
        Accept: "*/*",
      };

      let bodyContent = new FormData();
      bodyContent.append("file", file);

      fetch("http://127.0.0.1:8000/api/emails/", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      })
        .then((response) => console.log(response.text()))
        .catch((error) => console.error(error));
}