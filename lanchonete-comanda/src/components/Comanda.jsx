import styles from "./Comanda.module.css";

function Comanda({ pedidos }) {
  // 1. Cálculo do valor dos itens consumidos
  const valorTotalItens = pedidos.reduce((acc, item) => {
    return acc + (item.precoUnitario * item.quantidade);
  }, 0);

  // 2. Cálculo da Taxa de Serviço (10%)
  const taxaServico = valorTotalItens * 0.10;

  // 3. Valor Final (Itens + Taxa)
  const valorFinal = valorTotalItens + taxaServico;

  return (
    <div className={styles.recibo}>
      <div className={styles.cabecalho}>
        <h2>🧾 Resumo do Pedido</h2>
        <p>Mesa 04 - Atendente: João</p>
      </div>

      <ul className={styles.lista}>
        {pedidos.map((item) => {
          const subtotal = item.precoUnitario * item.quantidade;
          return (
            <li key={item.id} className={styles.itemLista}>
              <div className={styles.nomeQuantidade}>
                <span>{item.quantidade}x </span>
                <span>{item.nome}</span>
              </div>
              <span>R$ {subtotal.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>

      <hr className={styles.linhaDivisoria} />

      {/* Seção de Taxas e Totais */}
      <div className={styles.detalhesValores}>
        <div className={styles.linhaInfo}>
          <span>Subtotal:</span>
          <span>R$ {valorTotalItens.toFixed(2)}</span>
        </div>
        
        <div className={styles.linhaInfo}>
          <span>Taxa de Serviço (10%):</span>
          <span>R$ {taxaServico.toFixed(2)}</span>
        </div>

        <div className={styles.totalDiv}>
          <span>Total a Pagar:</span>
          <span className={styles.valorTotal}>R$ {valorFinal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Comanda;