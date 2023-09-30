using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApiSalgadosMeire.Moldels;

namespace WebApiSalgadosMeire.Services
{
    public class SalgadosServices
    {
        private readonly IMongoCollection<Salgado> _salgadosCollection; //Nome aleatório

        public SalgadosServices(IOptions<SalgadosDatabaseSettings> salgadosServices)
        { 

            var mongoClient = new MongoClient(salgadosServices.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(salgadosServices.Value.DatabaseName);

            _salgadosCollection = mongoDatabase.GetCollection<Salgado>
                (salgadosServices.Value.SalgadosCollectionName);
        }

        public async Task<List<Salgado>> GetAsync() =>
            await _salgadosCollection.Find(x => true).ToListAsync();

        public async Task<Salgado> GetAsync(string id) =>
            await _salgadosCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Salgado salgados) =>
            await _salgadosCollection.InsertOneAsync(salgados);

        public async Task UpdateAsync(string id, Salgado salgados) =>
            await _salgadosCollection.ReplaceOneAsync(x => x.Id == id, salgados);

        public async Task RemoveAsync(string id) =>
            await _salgadosCollection.DeleteOneAsync(x => x.Id == id);
    }
}
