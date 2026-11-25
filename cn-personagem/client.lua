local posicaoCamera = vector3(-450.0, 1000.0, 450.0)
local rotacaoCamera = vector3(-12.0, 0.0, 192.0)
local camera = nil
local jaEscolheu = false

local function abrirSelecao()
    if camera ~= nil then
        return
    end

    local ped = PlayerPedId()
    FreezeEntityPosition(ped, true)
    SetEntityVisible(ped, false, false)
    DisplayRadar(false)

    NetworkOverrideClockTime(19, 0, 0)
    SetFocusPosAndVel(posicaoCamera.x, posicaoCamera.y, posicaoCamera.z, 0.0, 0.0, 0.0)

    camera = CreateCamWithParams('DEFAULT_SCRIPTED_CAMERA', posicaoCamera.x, posicaoCamera.y, posicaoCamera.z, rotacaoCamera.x, rotacaoCamera.y, rotacaoCamera.z, 50.0, false, 0)
    SetCamActive(camera, true)
    RenderScriptCams(true, false, 0, true, true)

    SetNuiFocus(true, true)
    SendNUIMessage({ acao = 'abrir' })
end

local function fecharSelecao()
    SetNuiFocus(false, false)

    RenderScriptCams(false, false, 0, true, true)
    DestroyCam(camera, false)
    camera = nil 
    ClearFocus()
    NetworkClearClockTimeOverride()

    local ped = PlayerPedId()
    SetEntityVisible(ped, true, false)
    FreezeEntityPosition(ped, false)
    DisplayRadar(true)
end

AddEventHandler('playerSpawned', function()
    if jaEscolheu then 
        return
    end
    abrirSelecao()
end)

RegisterNUICallback('escolher', function(dados, responder)
    jaEscolheu = true
    fecharSelecao()
    TriggerEvent('cn:notificar', 'COSTA NEON', 'Bem-vindo à cidade, ' .. dados.nome .. '.')
    responder('ok')
end)

RegisterCommand('selecao', function()
    abrirSelecao()
end, false)

local trocando = false

local function abrirTroca()
        if not jaEscolheu or trocando then
            return
        end
        trocando = true
        SetNuiFocus(true, false)
        TriggerScreenblurFadeIn(300)
        SendNUIMessage({ acao = 'trocar' })
    end

    local function fecharTroca()
        trocando = false
        SetNuiFocus(false, false)
        TriggerScreenblurFadeOut(300)
    end

    RegisterCommand('trocarpersonagem', abrirTroca, false)
    RegisterKeyMapping('trocarpersonagem', 'Trocar de Personagem', 'keyboard', 'F5')

    RegisterNUICallback('trocar', function(dados, responder)
        fecharTroca()
        TriggerEvent('cn:notificar', 'PERSONAGEM', 'Agora você é ' .. dados.nome .. '.')
        responder('ok')
    end)

    RegisterNUICallback('fechar', function(dados, responder)
        fecharTroca()
        responder('ok')
    end)