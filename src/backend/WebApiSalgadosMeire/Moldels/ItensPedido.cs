using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiSalgadosMeire.Moldels
{
    public class ItensPedido
    {
        [Key]
        [Required]
        public Guid Id { get; set; }
        public Guid PedidoId { get; set; }

        public Guid SalgadoId { get; set; }

        [ForeignKey("SalgadoId")]
        public Salgado Salgado { get; set; }

        public int Quantidade { get; set; }
        public double ValorUnitarioNaCompra { get; set; }
        public string Observacoes { get; set; }

        private ItensPedido()
        {

        }

        public ItensPedido(Guid pedidoId, Guid salgadoId, int quantidade, double valorUnitarioNaCompra, string observacoes)
        {
            Id = Guid.NewGuid();
            PedidoId = pedidoId;
            SalgadoId = salgadoId;
            Quantidade = quantidade;
            ValorUnitarioNaCompra = valorUnitarioNaCompra;
            Observacoes = observacoes;
        }
    }
}
