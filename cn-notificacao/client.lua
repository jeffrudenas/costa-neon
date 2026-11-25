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

local jaDeuBoasVindas = false

AddEventHandler('playerSpawned', function()
    if jaDeuBoasVindas then
        return
end
jaDeuBoasVindas = true

Wait(2000)
notificar('COSTA NEON', 'Bem-vindo à cidade. Aproveite o pôr do sol.')
end)

RegisterCommand('testenotificacao', function()
    notificar('BANCO', 'Você recebeu R$500 de salário.')
    notificar('MULTA', 'Você foi multado em R$300', 'erro')
end, false)