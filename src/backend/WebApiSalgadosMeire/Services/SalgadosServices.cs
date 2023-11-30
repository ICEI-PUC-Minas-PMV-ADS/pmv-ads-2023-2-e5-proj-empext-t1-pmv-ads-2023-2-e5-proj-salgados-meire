using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApiSalgadosMeire.DataBase;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.Services
{
    public class SalgadosServices
    {
        private readonly SalgadosMeireContext _context;

        public SalgadosServices(SalgadosMeireContext context)
        {
            _context = context;
        }

        public async Task<List<Salgado>> ObterTodosSalgados()
        {
            return await _context.Salgados.Where(x => x.Ativo).ToListAsync();
        }

        public async Task<Salgado?> ObterSalgadoPorId(Guid id)
        {
            return await _context.Salgados.AsNoTracking().Where(x => x.Id.Equals(id)).FirstOrDefaultAsync();
        }

        public async Task AdicionarSalgado(Salgado salgado)
        {
            _context.Salgados.Add(salgado);
            await _context.SaveChangesAsync();
        }

        public async Task AtualizarSalgado(Salgado salgado)
        {
            _context.Salgados.Update(salgado);
            await _context.SaveChangesAsync();
        }
    }
}
