let filme = {
    titulo: 'Titanic',
    ano: 1998,
    diretor: 'James Cameron'
}

filme.pais = 'EUA' //cria nova propriedade e atribui valor
filme.diretor = 'Pedro Almodovar' //edita a propriedade atribuindo novo valor
delete filme.ano //deleta a propriedade ano

alert(Object.values(filme))
