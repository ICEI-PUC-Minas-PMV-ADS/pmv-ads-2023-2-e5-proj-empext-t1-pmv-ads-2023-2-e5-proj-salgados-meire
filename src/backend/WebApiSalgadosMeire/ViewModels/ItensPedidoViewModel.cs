using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.ViewModels
{
    public class ItensPedidoViewModel
    {
        public Guid SalgadoId { get; set; }
        public int Quantidade { get; set; }
        public double ValorUnitarioNaCompra { get; set; }
        public string Observacoes { get; set; }
    }
}
