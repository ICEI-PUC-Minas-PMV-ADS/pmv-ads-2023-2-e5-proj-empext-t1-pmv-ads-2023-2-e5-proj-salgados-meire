using Microsoft.EntityFrameworkCore;
using WebApiSalgadosMeire.DataBase;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.Services
{
    public class PedidoService
    {
        private readonly SalgadosMeireContext _context;

        public PedidoService(SalgadosMeireContext context)
        {
            _context = context;
        }

        public async Task<List<Pedido>> ObterTodosPedidos()
        {
            return await _context.Pedidos.ToListAsync();
        }

        public async Task<Pedido?> ObterPedidoPorId(Guid id)
        {
            return await _context.Pedidos.FindAsync(id);
        }

        public async Task<List<Pedido>> ObterPedidosPorClienteId(Guid clienteId)
        {
            return await _context.Pedidos.AsNoTracking().Include(x => x.ItensPedido).ThenInclude(x => x.Salgado).Where(x => x.ClienteId == clienteId).ToListAsync();
        }

        public async Task AdicionarPedido(Pedido pedido, List<ItensPedido> itens)
        {
            _context.Pedidos.Add(pedido);

            _context.ItensPedido.AddRange(itens);

            await _context.SaveChangesAsync();
        }

        public async Task AtualizarPedido(Pedido pedido)
        {
            _context.Pedidos.Update(pedido);
            await _context.SaveChangesAsync();
        }
    }
}
