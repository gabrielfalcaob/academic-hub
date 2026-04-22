/*
let pedro = "123.456.789-00";

console.log(pedro);

pedro = "***.***.***-**";

console.log(pedro);
*/

/*
//Aritimeticos: Processamento de dados de storage
const storageTotal = 5000; //KB
const storageUsado = 1250; //KB
const espacoRestante = storageTotal - storageUsado;
const percentualUsado = (storageUsado / storageTotal) * 100;

console.log("Total de armazenamento: ", storageTotal, " KB");
console.log("Armazenamento usado: ", storageUsado, " KB");
console.log("Espaço restante: ", espacoRestante, " KB");
console.log("Percentual usado: ", percentualUsado, "%");

let teste = 125;
teste /= 2;
console.log(teste);
*/

//Comparacao: Validacao de integridade
const linkDigitado = "https :// ufersa .edu.br";
const linkExistente = "https :// ufersa .edu.br";
const eNovoLink = linkDigitado !== linkExistente;
const campoVazio = linkDigitado === "";

console.log("O link digitado é diferente do existente? ", eNovoLink);
console.log("O campo de link está vazio? ", campoVazio);

let teste;
console.log(teste);
console.log(teste === undefined);

// Logicos : Autorizacao e Permissoes
const estaLogado = true;
const temPermissaoEdicao = false;
const podeEditar = estaLogado && temPermissaoEdicao;
const podeVisualizar = estaLogado || !temPermissaoEdicao;

// Ternario : Estados visuais simplificados
const isVip = true;
const statusUsuario = isVip ? "Premium " : "Free ";
