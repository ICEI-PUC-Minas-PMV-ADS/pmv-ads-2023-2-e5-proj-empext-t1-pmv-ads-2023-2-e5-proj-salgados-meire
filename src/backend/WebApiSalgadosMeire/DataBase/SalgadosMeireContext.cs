using Microsoft.EntityFrameworkCore;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.DataBase
{
    public class SalgadosMeireContext : DbContext
    {
        public SalgadosMeireContext(DbContextOptions<SalgadosMeireContext> options) : base(options)
        {

        }

        public DbSet<Salgado> Salgados { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItensPedido> ItensPedido { get;set; }
    }
}
