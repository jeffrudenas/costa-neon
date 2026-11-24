print('^6[cn-core]^7 Costa Neon aberta. Bem-vindos!')

AddEventHandler('playerConnecting', function(nome, setKickReason, deferrals)
    local jogador = source

    deferrals.defer()
    Wait(0)

    deferrals.update('Costa Neon | Conferindo o passaporte de ' .. nome .. '...')
    Wait(1500)

    local passaporte = GetPlayerIdentifierByType(jogador, 'license')

    if not passaporte then
        deferrals.done('Passaporte não encontrado. Abra o FiveM logado na sua conta Rockstar.')
            return 
    end

    print('^6[cn-core]^7 ' .. nome .. ' entrou na cidade.')
    deferrals.done()
end)