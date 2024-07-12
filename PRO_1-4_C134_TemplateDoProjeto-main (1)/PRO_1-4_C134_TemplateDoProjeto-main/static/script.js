$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
    $("display_date").html(display_date)

    $('').text('Data: ' + display_date)

    
    let review = ""
    let input_data = ""
    let product = ""
    let emotion = ""
    let emoji_url = ""



    // Escreva um evento, quando o botão Enviar for clicado
    $('').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({

            //  tipo da requisição web
            type : '',

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(input_data),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){

                // extraia previsão e a URL do emoticon do resultado
                emotion = result.sentiment
                emoji_url = result.path

                //  atualize os elementos DOM
                if (product  ==  'Smartphone'){
                    $('#m_emoji').attr('src' , emoji_url)
                    $('#m_emotion').text(emotion)
                    $('#m_emoji').show()
                    $('#m_emotion').show()
            
                //  exiba-os
                $('#m_button').click(function(){

                    review = $('#m_textbox').val()
                    input_data = {'customer_review' : review}
                    ajax_request('/predict' , input_data)
            
                    product = 'Smartphone'
                })
                }
            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        
})