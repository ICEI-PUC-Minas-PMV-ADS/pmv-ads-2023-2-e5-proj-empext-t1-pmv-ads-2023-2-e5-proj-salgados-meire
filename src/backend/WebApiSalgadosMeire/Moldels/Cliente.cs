using System.ComponentModel.DataAnnotations;

namespace WebApiSalgadosMeire.Moldels
{
    public class Cliente
    {
        [Key]
        [Required]
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Telefone { get; set; }

        private Cliente()
        {

        }

        public Cliente(string nome, string endereco, string telefone)
        {
            Id = Guid.NewGuid();
            Nome = nome;
            Endereco = endereco;
            Telefone = telefone;
        }

        public void AtualizarCliente(string nome, string endereco, string telefone)
        {
            Nome = nome;
            Endereco = endereco;
            Telefone = telefone;
        }
    }
}
