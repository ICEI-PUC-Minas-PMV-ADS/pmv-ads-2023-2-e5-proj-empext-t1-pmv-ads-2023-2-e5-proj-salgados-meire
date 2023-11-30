using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace WebApiSalgadosMeire.Moldels
{
    public class Salgado
    {
        [Key]
        [Required]
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double ValorUnitário { get; set; }
        public bool Ativo { get; set; } = true;
        public string ImageUrl { get; set; }

        private Salgado()
        {

        }

        public Salgado(string nome, string descricao, double valorUnitário, string imageUrl)
        {
            Id = Guid.NewGuid();
            Nome = nome;
            Descricao = descricao;
            ValorUnitário = valorUnitário;
            ImageUrl = imageUrl;
        }

        public void DeletarSalgado()
        {
            Ativo = false;
        }

        public void AtualizarSalgado(string nome, string descricao, double valorUnitário, string imageUrl)
        {
            Nome = nome;
            Descricao = descricao;
            ValorUnitário = valorUnitário;
            ImageUrl = imageUrl;
        }
    }
}
