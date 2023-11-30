using Microsoft.EntityFrameworkCore;
using WebApiSalgadosMeire.DataBase;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.Services
{
    public class ClientesService
    {
        private readonly SalgadosMeireContext _context;

        public ClientesService(SalgadosMeireContext context)
        {
            _context = context;
        }

        public async Task<Cliente?> ObterClientePorTelefone(string telefone)
        {
            return await _context.Clientes.AsNoTracking()
                .Where(c => c.Telefone.Equals(telefone)).FirstOrDefaultAsync();
        }

        public async Task AdicionarCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();
        }

        public async Task AtualizarCliente(Cliente cliente)
        {
            _context.Clientes.Update(cliente);
            await _context.SaveChangesAsync();
        }
    }
}
