local function notificar(titulo, texto, tipo)
    SendNUIMessage({
        acao = 'notificar',
        titulo = titulo,
        texto = texto,
        tipo = tipo,
    })
end

RegisterNetEvent('cn:notificar', function(titulo, texto, tipo)
    notificar(titulo, texto, tipo)
end)

RegisterCommand('testenotificacao', function()
    notificar('BANCO', 'Você recebeu R$500 de salário.')
    notificar('MULTA', 'Você foi multado em R$300', 'erro')
end, false)