document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Capturando os valores do formulário de reserva
    var quantidadePessoas = document.getElementById('quantidade_pessoas').value;
    var horarioReserva = document.getElementById('horario_reserva').value;
    var dataReserva = document.getElementById('data_reserva').value;
    
    // Adicionando uma nova linha à tabela com as informações da reserva
    var tableBody = document.getElementById('reservasTable').getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = quantidadePessoas;
    cell2.innerHTML = horarioReserva;
    cell3.innerHTML = dataReserva;
});
