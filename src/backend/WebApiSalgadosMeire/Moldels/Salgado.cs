using MongoDB.Bson.Serialization.Attributes;

namespace WebApiSalgadosMeire.Moldels
{
    public class Salgado
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; } = null;
        
        [BsonElement("Nome")]
        public string Nome { get; set; } = null;

        [BsonElement("Ingredientes")]
        public string Ingredientes { get; set; }

        [BsonElement("Preço")]
        public string Preco { get; set; }
    }
}
