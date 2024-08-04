const emailSendRequestTemplate = (userNameFrom, userNameTo) => {
    return `
    <table align="center" style="width: 100%; height: 100vh;">
        <tbody>
            <tr style="width: 100%; height: 100%;">
                <td align="center" style="width: 100%; height: 100%;">
                    <table style="max-width: 600px; height: 100%; border: solid 1px rgb(226, 224, 224); border-radius: 10px;">
                        <tr style="width: 100%; height: 15%;">
                            <td align="center" style="background-color: rgb(146, 146, 228); border-top-right-radius: 10px; border-top-left-radius: 10px;">
                                <img src="https://drive.google.com/uc?export=view&id=1VIkpkpixDwpgPyDvua1Tet4j3OYdodCH" style="width: 35%; height: 80%;" /> 
                            </td>
                        </tr>
                        <tr style="width: 100%; height: 70%;">
                            <td align="center">
                                <p style="display: flex; width: 90%; text-align: left; font-size: 25px; font-family: Arial, Helvetica, sans-serif;">
                                    Hello ${userNameTo}, </br> ${userNameFrom} sent you a friend request, click on the button to accept.
                                </p>
                            </td>
                        </tr>
                        <tr style="width: 100%; height: 15%;">
                            <td align="center" style="width: 100%; height: 100%; background-color: rgb(146, 146, 228); border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;">
                                <a style="display:inline-block; border: solid white 1px; border-radius: 10px; color:#ffffff;font-family:Helvetica;font-size:18px;margin:0;text-decoration:none;text-transform:none;padding:15px 30px 15px 30px;">ACCEPT</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tbody>     
    </table>
    `
}


module.exports = {
    emailSendRequestTemplate
}