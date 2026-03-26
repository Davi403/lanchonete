import styles from "./Comanda.module.css";

function Comanda({ pedidos }) {
  // Cálculo do total usando reduce
  const valorTotal = pedidos.reduce((acc, item) => {
    return acc + (item.precoUnitario * item.quantidade);
  }, 0);

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

      <div className={styles.totalDiv}>
        <span>Total a Pagar:</span>
        <span className={styles.valorTotal}>R$ {valorTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Comanda;