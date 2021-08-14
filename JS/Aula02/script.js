var texto = "Isso é uma guitarra, guitarra!";
var busca1 = texto.lastIndexOf("guitarra");
var busca2 = texto.lastIndexOf("guitarra", 20);
var busca3 = texto.lastIndexOf("violão");
// Após executado a variável busca1 deverá ter o valor 21
// busca2 deverá conter o valor 11,
// que é o valor da ocorrência da segunda guitarra
// e busca3 irá conter -1 pois o padrão não é encontrado.
alert(busca1);
alert(busca2);
alert(busca3);