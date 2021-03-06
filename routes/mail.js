var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function(req, res, next) {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const mensagem = req.body.mensagem;
  
    var aws = require('aws-sdk');

    // Provide the full path to your config.json file. 
    aws.config.loadFromPath("routes/config.json");

    // Replace sender@example.com with your "From" address.
    // This address must be verified with Amazon SES.
    const sender = "Site Taiane <vanderson.th@gmail.com>";

    // Replace recipient@example.com with a "To" address. If your account 
    // is still in the sandbox, this address must be verified.
    // const recipient = "taianemartinscota@gmail.com";
    const recipient = "taianemartinscosta@gmail.com";


    // Specify a configuration set. If you do not want to use a configuration
    // set, comment the following variable, and the 
    // Specify a configuration set. If you do not want to use a configuration
    // set, comment the following variable, and the 
    // ConfigurationSetName : configuration_set argument below.
    // const configuration_set = "ConfigSet";

    // The subject line for the email.
    const subject = "Site Dr. Taiane: "+nome;

    // The email body for recipients with non-HTML email clients.
    const body_text = "Cliente: "+nome+"\r\n"
                    + "Telefone: "+telefone+"\r\n"
                    + "E-mail: "+email+"\r\n"
                    + mensagem;
                
    // The HTML body of the email.
    const regex = /\r\n/g;
    const html_mensagem = body_text.replace(regex, "<br/>");
    const body_html = "<html><head></head><body><p>"+html_mensagem+"</p></body></html>";

    // The character encoding for the email.
    const charset = "UTF-8";

    // Create a new SES object. 
    var ses = new aws.SES();

    // Specify the parameters to pass to the API.
    var params = { 
        Source: sender, 
        Destination: { 
            ToAddresses: [
            recipient 
            ]
        },
        
        Message: {
            Subject: {
                Data: subject,
                Charset: charset
            },
            Body: {
                Text: {
                    Data: body_text,
                    Charset: charset 
                },
                Html: {
                    Data: body_html,
                    Charset: charset
                }
            }
        },
            ReplyToAddresses: [email],
            ReturnPath: "vanderson.th@gmail.com"
    // ConfigurationSetName: configuration_set
    };

    //Try to send the email.
    ses.sendEmail(params, function(err, data) {
        // If something goes wrong, print an error message.
        if(err) {
            console.log(err.message, err);
            res.status(500).json({msg:"Ocorreu um erro ao enviar sua mensagem! Por favor tente mais tarde ou se preferir nos contate pelo whatsapp ou facebook"+err.message})
        } else {
            console.log(data, 'data')
            res.status(200).json({msg:"Sua mensagem foi enviada com sucesso!"});
        }
    });
});

module.exports = router;
