using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.ViewModels
{
    public class PedidoViewModel
    {
        public Guid ClienteId { get; set; }
        public DateTime DataPedido { get; set; }
        public string Status { get; set; } // Pendente = 'P' ; Aceito = 'A'; Cancelado = 'C'; Em preparo = 'E'; Saiu para entrega = 'S'
        public string FormaPagamento { get; set; } // Dinheiro = 'D'; Cartão na Entrega = 'C' ;
        public double TrocoPara { get; set; }
        public List<ItensPedidoViewModel> ItensPedidos { get; set; }
    }
}
