namespace WebApiSalgadosMeire.ViewModels
{
    public class SalgadoViewModel
    {
        public Guid? Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double ValorUnitário { get; set; }
        public string ImageUrl { get; set; }
    }
}
