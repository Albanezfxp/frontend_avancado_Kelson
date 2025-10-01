const produtos = (nome, preco, categoria, quantidade) => {
return (
    <div>
        <p>Nome: {nome}</p>
        <p>Preco: {preco}</p>
        <p>Categoria: {categoria}</p>
        <p>Quantidade: {quantidade}</p>
        <p>Status: {quantidade > 0 ? "DISPONIVEL" : "ESGOTADO"}</p>
        <p>---</p>
    </div>
)
}   

export default produtos;