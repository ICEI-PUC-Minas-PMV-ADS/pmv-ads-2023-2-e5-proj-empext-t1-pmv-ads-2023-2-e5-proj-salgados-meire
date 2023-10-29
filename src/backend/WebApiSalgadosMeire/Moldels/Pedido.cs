using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiSalgadosMeire.Moldels
{
    public class Pedido
    {
        [Key]
        [Required]
        public Guid Id { get; set; }
        public Guid ClienteId { get; set; }

        [ForeignKey("ClienteId")]
        public Cliente Cliente { get; set; }

        public DateTime DataPedido { get; set; }
        public string Status { get; set; } = "P";// Pendente = 'P' ; Aceito = 'A'; Cancelado = 'C'; Em preparo = 'E'; Saiu para entrega = 'S'
        public string FormaPagamento { get; set; } // Dinheiro = 'D'; Cartão na Entrega = 'C' ;
        public double TrocoPara { get; set; }

        public ICollection<ItensPedido> ItensPedido { get; set; }

        private Pedido()
        {

        }

        public Pedido(Guid clienteId, DateTime dataPedido, string formaPagamento, double trocoPara)
        {
            Id = Guid.NewGuid();
            ClienteId = clienteId;
            DataPedido = dataPedido;
            FormaPagamento = formaPagamento;
            TrocoPara = trocoPara;
        }

        public void AlterarStatusPedido(string status)
        {
            Status = status;
        }
    }
}
