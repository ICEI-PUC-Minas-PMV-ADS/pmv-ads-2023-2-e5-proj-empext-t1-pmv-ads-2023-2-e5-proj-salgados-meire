using WebApiSalgadosMeire.DataBase;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.Services
{
    public class ItensPedidoService
    {
        private readonly SalgadosMeireContext _context;

        public ItensPedidoService(SalgadosMeireContext context)
        {
            _context = context;
        }

        public async Task AdicionarItemPedido(ItensPedido itemPedido)
        {
            _context.ItensPedido.Add(itemPedido);
            await _context.SaveChangesAsync();
        }
    }
}
